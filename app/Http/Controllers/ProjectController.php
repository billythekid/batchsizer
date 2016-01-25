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
            alert()->error('Failed', 'You already have a project, to add more consider upgrading your account.');

            return redirect()->back();
        }
        $project = Project::create([
            'name'    => $request->get('name'),
            'user_id' => $request->user()->id,
        ]);
        $request->user()->projects()->save($project);
        alert()->success('Success', "Project {$request->name} successfully created");

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

        if ($project->update($request->all()))
        {
            alert()->success('Success', "Project {$project->name} updated!");
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
