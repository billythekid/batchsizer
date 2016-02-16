<?php

namespace App\Http\Controllers;

use App\User;
use App\Project;
use SplFileInfo;
use Faker\Factory;
use App\CommonSize;
use App\Http\Requests;
use App\Jobs\ResizeFile;
use App\EmailUploadAddress;
use Illuminate\Http\Request;
use Aws\S3\Exception\S3Exception;
use Illuminate\Support\Facades\DB;
use Chumper\Zipper\Facades\Zipper;
use App\Events\FileBeingProcessed;
use App\Jobs\SaveFileToFilesystem;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{


    public function __construct()
    {

    }

    public function index()
    {
        abort(404);
    }

    public function create()
    {
        abort(404);
    }

    public function edit(Project $project)
    {
        abort(404);
    }

    public function destroy(Project $project)
    {
        $this->authorize($project);
        abort(404);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->user()->plan() == 'project' && $request->user()->projects()->count() > 0)
        {
            alert()->error('Maxed Out!', 'You already have a project, to add more consider upgrading your account.');

            return redirect()->back();
        }
        if ($request->user()->plan() == 'freelancer' && $request->user()->projects()->count() > 4)
        {
            alert()->error('Maxed Out!', 'Freelancer accounts are limited to 5 projects. To add more consider upgrading your account.');

            return redirect()->back();
        }
        $this->validate($request, ['projectname' => 'required'], ['projectname.required' => 'Projects need names']);
        $project = Project::create([
            'name'    => $request->get('projectname'),
            'user_id' => $request->user()->id,
        ]);
        // we own the project but it won't appear in our projects list unless we add ourselves to it too.
        $request->user()->projects()->save($project);
        alert()->success('Success', "{$request->name} successfully created");

        return redirect()->route('project.show', $project);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        $this->authorize($project);
        $channel = md5(str_random() . time());
        try
        {
            $allFiles = Storage::allFiles("projects/{$project->id}/");
        }
        catch (S3Exception $e)
        {
            $allFiles = [];
        }
        $uploadedFiles = array_filter($allFiles, function ($string)
        {
            return str_contains($string, "uploads");
        });
        $resizedZips = array_filter($allFiles, function ($string)
        {
            return str_contains($string, "resized");
        });
        $thumbs = array_filter($uploadedFiles, function ($string)
        {
            return str_contains($string, "btk-tn");
        });
        $thumbnails = [];
        foreach ($thumbs as &$thumb)
        {
            $thumbArray = explode('/', $thumb);
            $thumbnails[] = [
                'directory' => $thumbArray[0],
                'project'   => $project->id,
                'filename'  => end($thumbArray),
            ];
        }
        $commonSizes = CommonSize::orderBy('type')->get();

        return view()->make('projects.single',
            compact(
                'project',
                'channel',
                'uploadedFiles',
                'thumbnails',
                'resizedZips',
                'commonSizes'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int                      $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        $this->authorize($project);

        $project->save_uploads = ($request->has('save_uploads'));
        $project->save_resized_zips = ($request->has('save_resized_zips'));

        $teamIDs = $request->input('teams');
        $teams = DB::table('teams')
            ->whereIn('id', $teamIDs)
            ->where('owner_id', '=', $request->user()->id)
            ->pluck('id');
        $project->teams()->sync($teams);

        $memberIDs = [$request->user()->id];
        foreach ($project->teamMembers as $member)
        {
            $memberIDs[] = $member->id;
        }
        $project->members()->sync($memberIDs);

        if ($request->has('members'))
        {
            foreach ($request->input('members') as $memberID)
            {
                if ($request->user()->allTeamMembers()->has(User::find($memberID)->email))
                {
                    $project->members()->attach($memberID);
                }
            }
        }


        if ($project->update($request->all()))
        {
            alert()->success('Success', "{$project->name} updated!");
        } else
        {
            alert()->error('Error', "Could not update {$project->name}");
        }

        return redirect()->back();
    }


    /**
     * Our main method, when a person uploads their files, we sort it all out here
     *
     * @param Request $request
     * @param Project $project
     * @return mixed
     */
    public function handleUploads(Request $request, Project $project)
    {
        $this->authorize($project);
        $files = $request->files->all()['file'];
        if ($request->user()->plan == 'project')
        {
            $files = array_filter($files, function ($file)
            {
                return ($file->getMimeType() != "application/zip");
            });
        }
        if (empty($files))
        {
            return response()->json(['status' => 'error', 'message' => 'No images were uploaded!']);
        }

        $sizes = $request->input('dimensions');
        $download = (!$project->save_resized_zips || $request->has('download'));

        $options = [
            'quality'     => $request->input('quality'),
            'responsive'  => $request->has('responsive'),
            'noupscale'   => $request->has('noupscale'),
            'greyscale'   => $request->has('greyscale'),
            'aspectRatio' => $request->has('aspectratio'),
            'pixelate'    => $request->input('pixelate'),
            'red'         => $request->input('red'),
            'green'       => $request->input('green'),
            'blue'        => $request->input('blue'),
            'blur'        => $request->input('blur'),
        ];

        $tempFiles = $this->SaveTempFiles($project, $files);
        $resizedZip = $this->resizeFiles($project, $tempFiles, $sizes, $options);
        $resizedZipObject = new SplFileInfo($resizedZip['zip']);


        if ($project->save_uploads)
        {
            $directory = 'projects/' . $project->id . '/uploads';
            $this->saveFiles($directory, $tempFiles, true);
        } else
        {
            File::delete($tempFiles);
        }

        if ($project->save_resized_zips)
        {
            $directory = 'projects/' . $project->id . '/resized';
            $this->saveFiles($directory, [0 => $resizedZipObject], true);
        }

        if ($download)
        {
            if (File::exists($resizedZip['zip']))
            {
                $original = $resizedZipObject->getRealPath();
                $copy = $resizedZipObject->getPath() . "/download.zip";
                File::copy($original, $copy);
            }

            $resizedZip['status'] = 'success';
            unset($resizedZip['zip']);

            return response()->json($resizedZip);
        }

        return response()->json(['status' => 'success']);
    }

    /**
     * Sets up the queue job to save files to S3
     *
     * @param String        $directory
     * @param SplFileInfo[] $tempFiles
     * @param bool          $deleteOnComplete
     */
    private function saveFiles($directory, $tempFiles, $deleteOnComplete = false)
    {
        foreach ($tempFiles as $file)
        {
            $filename = $file->getFilename();
            $filePath = $file->getPath();
            $fileRealPath = $file->getRealPath();
            if ($this->fileIsAnImage($fileRealPath))
            {
                $thumbnailName = "btk-tn-{$filename}";
                $thumbRealPath = $filePath . '/' . $thumbnailName;
                $tn = Image::make($file);
                $tn->fit(100)->save($thumbRealPath, 95);
                $thumbJob = (new SaveFileToFilesystem($thumbRealPath, $directory, $thumbnailName, $deleteOnComplete));
                $this->dispatch($thumbJob);
            }
            $job = (new SaveFileToFilesystem($fileRealPath, $directory, $filename, $deleteOnComplete));
            $this->dispatch($job);
        }
    }

    /**
     * @param Project $project
     * @param         $files
     * @param         $download
     * @param         $sizes
     * @param         $options
     */
    protected function SaveTempFiles(Project $project, $files)
    {
        $randomString = md5(str_random(23));
        $storage_path = storage_path('app/queuefiles/' . $project->id . '/' . $randomString);

        foreach ($files as $file)
        {
            $filename = $file->getClientOriginalName();
            $movedFile = $file->move($storage_path, $filename);
            if (ends_with($filename, '.zip'))
            {
                $extractPath = $storage_path;
                Zipper::zip($movedFile)->extractTo($extractPath, ['__MACOSX']);
            }
        }
        $tempfiles = File::allFiles($storage_path);

        return $tempfiles;
    }

    /**
     * @param $file
     * @return mixed
     */
    private function fileIsAnImage($fileRealPath)
    {
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime = finfo_file($finfo, $fileRealPath);
        finfo_close($finfo);

        return (str_contains($mime, "image"));
    }

    private function resizeFiles($project, $tempFiles, $sizesString, $options)
    {
        /*
        $options = [
            'quality'     => $request->input('quality'),
            'responsive'  => $request->has('responsive'),
            'noupscale'   => $request->has('noupscale'),
            'greyscale'   => $request->has('greyscale'),
            'aspectRatio' => $request->has('aspectratio'),
            'pixelate'    => $request->input('pixelate'),
            'red'         => $request->input('red'),
            'green'       => $request->input('green'),
            'blue'        => $request->input('blue'),
            'blur'        => $request->input('blur'),
        ];
         */

        $sizes = explode(',', $sizesString);
        if (empty($sizes))
        {
            $sizes = [0];
        }
        $sizesString = implode('-', $sizes) ?: '0';
        $sizesString = "-" . $sizesString;
        $tempFiles = array_filter($tempFiles, function (SplFileInfo $file)
        {
            return $file->getExtension() != 'zip';
        });

        $totalConversions = count($sizes) * count($tempFiles);
        $currentFile = 0;
        $randomString = str_random(10);
        $folder = storage_path("app/resizedfiles/{$project->id}/{$randomString}/");

        $zipFileName = str_slug($project->name) . $sizesString;
        $zipFileName .= '-q' . $options['quality'];
        $zipFileName .= ($options['greyscale']) ? '-bw' : '';
        $rgb = false;
        if ($options['red'] != '0' || $options['green'] != '0' || $options['blue'] != '0')
        {
            $rgb = [
                'r' => $options['red'],
                'g' => $options['green'],
                'b' => $options['blue'],
            ];
        }
        $zipFileName .= ($rgb != false) ? "-r{$rgb['r']}g{$rgb['g']}b{$rgb['b']}" : "";
        $zipFileName .= ($options['blur'] != 0) ? "-{$options['blur']}blur" : '';
        $zipFileName .= ($options['pixelate'] != 0) ? "-{$options['pixelate']}px" : '';
        $zipFileName .= ".zip";
        $zipFilePath = $folder . $zipFileName;
        $zip = Zipper::make($zipFilePath);
        foreach ($tempFiles as $tempFile)
        {
            $currentFile++;
            $percentageComplete = ceil(($currentFile / $totalConversions) * 100);
            event(new FileBeingProcessed($percentageComplete, request('channel')));

            $image = Image::make($tempFile);

            foreach ($sizes as $dimension)
            {
                $dimension = explode('x', $dimension);
                $width = $dimension[0];
                $width = (is_numeric($width) && $width > 0) ? $width : $image->width();
                //set the height based on the options...
                if (count($dimension) == 2)
                { //if they passed us a height, use it.
                    $height = $dimension[1];
                } elseif (!$options['responsive'])
                { //if not responsive and no height given, they want a square image
                    $height = $width;
                } else
                { //if responsive and no height given, set the height to 0 - we'll check or ignore this later.
                    $height = 0;
                }

                // we'll check if we even need to resize the image first...
                if (!$options['noupscale'] || $image->width() > $width)
                {
                    if ($options['responsive'])
                    {
                        $image->widen($width);
                    } else
                    {
                        if ($options['aspectRatio'])
                        {
                            if ($height == 0)
                            {
                                $image->fit($width);
                            } else
                            {
                                $image->fit($width, $height);
                            }
                        } else
                        {
                            if ($height == 0)
                            {
                                $image->resize($width, $width);
                            } else
                            {
                                $image->resize($width, $height);
                            }
                        }

                    }
                }

                // now the image is resized, let's add our effects, if any.
                if ($options['greyscale'])
                {
                    $image->greyscale();
                }
                if ($rgb != false)
                {
                    $image->colorize($rgb['r'], $rgb['g'], $rgb['b']);
                }
                if ($options['blur'] != 0)
                {
                    $image->blur($options['blur']);
                }
                if ($options['pixelate'] != '0')
                {
                    $pixels = [
                        'xs' => 2,
                        's'  => 4,
                        'm'  => 6,
                        'l'  => 10,
                        'xl' => 20,
                    ];
                    if (array_key_exists($options['pixelate'], $pixels))
                    {
                        $image->pixelate($pixels[$options['pixelate']]);
                    }
                }

                // work out our image's new name
                $imageName = $tempFile->getFilename();
                $width = $image->width();
                $height = $image->height();
                $imageName .= ".{$width}x{$height}";
                $imageName .= '-q' . $options['quality'];
                $imageName .= ($options['greyscale']) ? '-bw' : '';
                $imageName .= ($rgb != false) ? "-r{$rgb['r']}g{$rgb['g']}b{$rgb['b']}" : "";
                $imageName .= ($options['blur'] != 0) ? "-{$options['blur']}blur" : '';
                $imageName .= ($options['pixelate'] == '0') ? '' : "-{$options['pixelate']}px";
                $imageName .= ".{$tempFile->getExtension()}";
                // add it to the zip
                $image->save($imageName, $options['quality']);
                $zip->addString($imageName, $image);
                @unlink($imageName);
            }

            $image->destroy();
        }

        //now we have all our files in our zip, let's return it
        $zip->close();


        return [
            'zip' => $zipFilePath,
            'url' => route('downloadProjectZip', [$project, $randomString, $zipFileName]),
        ];
    }

    /**
     * This handles the immediate downloading of a file after resizing
     *
     * @param Request $request
     * @param Project $project
     * @param         $directory
     * @param         $filename
     * @return mixed
     */
    public function downloadProjectZip(Request $request, Project $project, $directory, $filename)
    {
        $this->authorize($project);

        return response()->download(storage_path("app/resizedfiles/{$project->id}/{$directory}/download.zip"), str_slug($filename))->deleteFileAfterSend(true);
    }

    /**
     * Returns an image's data-url from storage
     *
     * @param Request $request
     * @param         $directory
     * @param Project $project
     * @param         $filename
     * @return mixed
     */
    public function getUploadedImage(Request $request, $directory, Project $project, $filename)
    {
        $this->authorize($project);

        return Image::make(Storage::get("{$directory}/{$project->id}/uploads/{$filename}"))->encode('data-url');
    }

    /**
     * Removes a file from storage
     *
     * @param Request $request
     * @param Project $project
     * @return mixed
     */
    public function deleteFile(Request $request, Project $project)
    {
        $this->authorize($project);
        $this->validate($request, [
            'type' => 'required|in:upload,resized',
            'file' => 'required',
        ]);

        $path = "projects/{$project->id}/";
        $path .= $request->input('type') == 'upload' ? 'uploads/' : 'resized/';
        $file = basename($request->input('file'));

        if (Storage::delete($path . $file))
        {
            if ($request->has('tn'))
            {
                $tn = basename($request->input('tn'));
                Storage::delete($path . $tn);
            }
            alert()->success('Success', "{$file} was deleted.");
        } else
        {
            alert()->error('Oh Noes!', "{$file} was not deleted. Please try again.");
        }

        return redirect()->back();

    }

    /**
     * Gets a file from storage and returns it to the browser for downloading
     * @param Request $request
     * @param Project $project
     * @param         $filename
     */
    public function downloadProjectFile(Request $request, Project $project)
    {
        $this->authorize($project);
        $this->validate($request, [
            'type' => 'required|in:upload,resized',
            'file' => 'required',
        ]);
        $path = "projects/{$project->id}/";
        $path .= $request->type == 'upload' ? 'uploads/' : 'resized/';
        $filename = basename($request->input('file'));
        $localpath = 'downloads/' . md5(str_random(23));
        Storage::disk('local')->put($localpath, Storage::get($path . $filename));

        return response()->download(storage_path('app/' . $localpath), $filename)->deleteFileAfterSend(true);
    }

    public function renameProjectFile(Request $request, Project $project)
    {
        $this->authorize($project);
        $this->validate($request, [
            'type'        => 'required|in:upload,resized',
            'oldfilename' => 'required',
            'file'        => 'required',
        ]);
        $path = "projects/{$project->id}/";
        $path .= $request->type == 'upload' ? 'uploads/' : 'resized/';
        $oldFileName = basename($request->input('oldfilename'));
        $newFileName = basename($request->input('file'));
        $newFileName .= (ends_with($newFileName, '.zip')) ? '' : '.zip';
        Storage::move($path . $oldFileName, $path . $newFileName);
        alert()->success('Success', "{$oldFileName} was renamed to {$newFileName}.");

        return redirect()->back();
    }


    public function refreshEmailAddress(Request $request, Project $project)
    {
        $this->authorize($project);

        $emailUploadAddress = EmailUploadAddress::firstOrCreate(['project_id' => $project->id, 'user_id' => $request->user()->id]);
        $faker = Factory::create();
        $email = $faker->userName . "@batchsizer.co.uk";
        while (!empty(EmailUploadAddress::where('email', $email)->first()))
        {
            $email = $faker->userName . "@batchsizer.co.uk";
        }
        $emailUploadAddress->email = $email;
        $emailUploadAddress->save();

        if($request->ajax())
        {
            return $emailUploadAddress;
        }
        return redirect()->back();
    }

    public function resizeByEmail(Request $request)
    {
        Log::info($request->all());
    }

}
