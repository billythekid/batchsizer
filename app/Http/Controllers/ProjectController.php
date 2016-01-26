<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{

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

        return view()->make('projects.single', compact('project'));
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
}
