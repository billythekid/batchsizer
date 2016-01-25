<?php

namespace App\Policies;

use App\User;
use App\Project;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProjectPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * A user must be in the project's members collection to be able to view the project
     *
     * @param User    $user
     * @param Project $project
     * @return mixed
     */
    public function show(User $user, Project $project)
    {
        return ($project->owner->id === $user->id || $project->members->contains($user));
    }


    /**
     * A user must own the project to be able to update it.
     *
     * @param User    $user
     * @param Project $project
     * @return bool
     */
    public function update(User $user, Project $project)
    {
        return $project->owner->id === $user->id;
    }



}
