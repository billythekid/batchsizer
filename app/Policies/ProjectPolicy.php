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
        return $project->members->contains($user);
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

    /**
     * A user must be part of the project to be able to resize on it.
     *
     * @param User    $user
     * @param Project $project
     * @return bool
     */
    public function resize(User $user, Project $project)
    {
        return $project->members->contains($user);
    }

    /**
     * A user must be part of the project to get the files.
     *
     * @param User    $user
     * @param Project $project
     * @return mixed
     */
    public function getUploadedFile(User $user, Project $project)
    {
        return $project->members->contains($user);
    }


}
