<?php

namespace App\Http\Controllers;

use App\Project;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Jobs\SaveFileToFilesystem;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

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

        if ($project->save_uploads)
        {
            $directory = 'projects/' . $project->id;
            $this->saveFiles($directory, $files);
        }




        return response()->json(['status' => 'success']);
    }

    private function saveFiles($directory, $files)
    {
        foreach ($files as $file)
        {
            $filename = $file->getClientOriginalName();
            $filePath = storage_path() . '/app/' . $directory;

            if (str_contains($file->getMimeType(), "image"))
            {
                $thumbnailName = "btk-tn-{$filename}";
                $tn = Image::make($file);
                $tn->fit(100)->save($filePath . "/" . $thumbnailName, 95);
                $this->dispatch(new SaveFileToFilesystem($directory, $thumbnailName));
            }

            $file->move($filePath, $filename);
            $this->dispatch(new SaveFileToFilesystem($directory, $filename));

        }
    }

    public function getUploadedFile(Request $request, $directory, Project $project, $filename)
    {
        $this->authorize($project);

        return Image::make(Storage::get("{$directory}/{$project->id}/{$filename}"))->encode('data-url');
    }
}
