<?php

namespace App\Http\Controllers;

use App\Events\FileBeingProcessed;
use App\Jobs\ResizeFile;
use App\Project;
use App\Http\Requests;
use Chumper\Zipper\Facades\Zipper;
use Chumper\Zipper\Zipper as Zip;
use Illuminate\Http\Request;
use App\Jobs\SaveFileToFilesystem;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use SplFileInfo;

class ProjectController extends Controller
{


    public function __construct()
    {

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        $project = Project::create([
            'name'    => $request->get('name'),
            'user_id' => $request->user()->id,
        ]);
        // we own the project but it won't appear in our projects list unless we add ourselves to it too.
        $request->user()->projects()->save($project);
        alert()->success('Success', "{$request->name} successfully created");

        return redirect()->back();
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

        return view()->make('projects.single', compact('project', 'channel'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
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
     * Remove the specified resource from storage.
     *
     * @param  int $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $this->authorize($project);
        //
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
        $sizes = $request->input('dimensions');
        $download = (!$project->save_resized_zips || $request->has('download'));

        $options = [
            'responsive'  => $request->has('responsive'),
            'noupscale'   => $request->has('noupscale'),
            'greyscale'   => $request->has('greyscale'),
            'aspectRatio' => $request->has('aspectratio'),
            'pixelate'    => $request->input('pixelate'),
            'red'         => $request->input('red'),
            'green'       => $request->input('green'),
            'blue'        => $request->input('blue'),
        ];

        $tempFiles = $this->SaveTempFiles($project, $files);
        $resizedZip = $this->resizeFiles($project, $tempFiles, $sizes, $options);

        if ($project->save_uploads)
        {
            $directory = 'projects/' . $project->id . '/uploads';
            $this->saveFiles($directory, $tempFiles);
        }

        if ($project->save_resized_zips)
        {
            $fileObject = new SplFileInfo($resizedZip['zip']);
            $directory = 'projects/' . $project->id . '/resized';
            $this->saveFiles($directory, [$fileObject]);
        }
        if ($download)
        {
            $resizedZip['status'] = 'success';
            unset($resizedZip['zip']);

            return response()->json($resizedZip);
        }

        return response()->json(['status' => 'success']);
    }

    private function saveFiles($directory, $tempFiles)
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
                $thumbJob = (new SaveFileToFilesystem($thumbRealPath, $directory, $thumbnailName));
                $this->dispatch($thumbJob);
            }
            $job = (new SaveFileToFilesystem($fileRealPath, $directory, $filename));
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
        $options['responsive'] = $request->has('responsive');
        $options['noupscale'] = $request->has('noupscale');
        $options['greyscale'] = $request->has('greyscale');
        $options['aspectRatio'] = $request->has('aspectratio');
        $options['pixelate'] = $request->input('pixelate');
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

        $zipFileName = "BatchSizer-" . str_slug($project->name) . $sizesString;
        $zipFileName .= ($options['greyscale']) ? '-bw' : '';
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
                $rgb = false;
                if ($options['greyscale'])
                {
                    $image->greyscale();
                }
                if ($options['red'] != '0' || $options['green'] != '0' || $options['blue'] != '0')
                {
                    $rgb = "{$options['red']},{$options['green']},{$options['blue']}";
                    $image->colorize($options['red'],$options['green'],$options['blue']);
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
                $imageName .= ($options['greyscale']) ? '-bw' : '';
                $imageName .= ($rgb != false) ? "-rgb({$rgb})": "";
                $imageName .= ($options['pixelate'] == '0') ? '' : "-{$options['pixelate']}px";
                $imageName .= ".{$tempFile->getExtension()}";
                // add it to the zip
                $image->save($imageName, 100);
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

    public function getDownload(Request $request, Project $project, $directory, $filename)
    {
        $this->authorize($project);

        return response()->download(storage_path("app/resizedfiles/{$project->id}/{$directory}/{$filename}"))->deleteFileAfterSend(true);
    }

    public function getUploadedFile(Request $request, $directory, Project $project, $filename)
    {
        $this->authorize($project);

        return Image::make(Storage::get("{$directory}/{$project->id}/uploads/{$filename}"))->encode('data-url');
    }
}
