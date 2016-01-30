<?php

namespace App\Http\Controllers;

use Alchemy\Zippy\Zippy;
use App\Jobs\ResizeFile;
use App\Project;
use App\Http\Requests;
use Chumper\Zipper\Facades\Zipper;
use Chumper\Zipper\Zipper as Zip;
use Exception;
use Illuminate\Http\Request;
use App\Jobs\SaveFileToFilesystem;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use ZipArchive;

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

    public function resize(Request $request, Project $project)
    {
        $this->authorize($project);
        $files = $request->files->all()['file'];
        $sizes = $request->input('dimensions');
        $download = (!$project->save_resized_zips || $request->has('download'));

        $options['responsive'] = $request->has('responsive');
        $options['noupscale'] = $request->has('noupscale');
        $options['greyscale'] = $request->has('greyscale');
        $options['aspectRatio'] = $request->has('aspectratio');
        $options['pixelate'] = $request->input('pixelate');

        $tempFiles = $this->SaveTempFiles($project, $files, $download, $sizes, $options);

        if ($project->save_uploads)
        {
            $directory = 'projects/' . $project->id . '/uploads';
            $this->saveFiles($directory, $tempFiles);
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
                $thumbRealPath = $filePath . $thumbnailName;
                $tn = Image::make($file);
                $tn->fit(100)->save($thumbRealPath, 95);
                $thumbJob = (new SaveFileToFilesystem($thumbRealPath, $directory, $thumbnailName));
                $this->dispatch($thumbJob);
            }
            $job = (new SaveFileToFilesystem($fileRealPath, $directory, $filename));
            $this->dispatch($job);
        }
    }

    public function getUploadedFile(Request $request, $directory, Project $project, $filename)
    {
        $this->authorize($project);

        return Image::make(Storage::get("{$directory}/{$project->id}/uploads/{$filename}"))->encode('data-url');
    }

    /**
     * @param $file
     * @param $tempdir
     * @param $download
     * @param $sizes
     * @param $options
     */
    protected function saveTemporaryFileAndQueueResize($file, $tempdir, $download, $sizes, $options)
    {

        $filename = $file->getFilename();
        $fileRealPath = $file->getRealPath();

        $filePath = $tempdir . '/' . $filename;

        if ($this->fileIsAnImage($fileRealPath))
        {
            $resource = fopen($fileRealPath, 'r');
            Storage::disk('local')->put($filePath, $resource);
            fclose($resource);
            $connection = ($download) ? "sync" : "database"; //how will we handle the conversion queue
            $resizeJob = (new ResizeFile($tempdir, $filename, $sizes, $options, $connection));
            $this->dispatch($resizeJob);
        }
    }

    /**
     * @param Project $project
     * @param         $files
     * @param         $download
     * @param         $sizes
     * @param         $options
     */
    protected function SaveTempFiles(Project $project, $files, $download, $sizes, $options)
    {
        $tempdir = 'queuefiles/' . $project->id;
        foreach ($files as $file)
        {
            $filename = $file->getClientOriginalName();
            $movedFile = $file->move(storage_path('app/queuefiles/' . $project->id), $filename);
            if (ends_with($filename, '.zip'))
            {
                $extractPath = storage_path('app/queuefiles/' . $project->id);
                Zipper::zip($movedFile)->extractTo($extractPath, ['__MACOSX']);
                //$zippy = Zippy::load();
                //$zip = $zippy->open($movedFile);
                //$zip->extract($extractPath);
            }
        }
        $tempfiles = File::allFiles(storage_path('app/queuefiles/' . $project->id));

        foreach ($tempfiles as $tempfile)
        {
            $this->saveTemporaryFileAndQueueResize($tempfile, $tempdir, $download, $sizes, $options);
        }

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
}
