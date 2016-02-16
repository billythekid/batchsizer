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
    public function handleUploads(User $user, Project $project)
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
    public function getUploadedImage(User $user, Project $project)
    {
        return $project->members->contains($user);
    }

    /**
     * A user must be part of the project to get a file after resizing
     * @param User    $user
     * @param Project $project
     * @return mixed
     */
    public function downloadProjectZip(User $user, Project $project)
    {
        return $project->members->contains($user);
    }

    /**
     * A user must be part of the project to delete a file from storage
     * @param User    $user
     * @param Project $project
     * @return mixed
     */
    public function deleteFile(User $user, Project $project)
    {
        return $project->members->contains($user);
    }

    /**
     * A user must be part of the project to download a file from storage
     * @param User    $user
     * @param Project $project
     * @return mixed
     */
    public function downloadProjectFile(User $user, Project $project)
    {
        return $project->members->contains($user);
    }

    /**
     * A user must be part of the project to rename a file
     * The owner of the project must not be on the lowest plan
     * @param User    $user
     * @param Project $project
     * @return mixed
     */
    public function renameProjectFile(User $user, Project $project)
    {
        return $project->members->contains($user) && $project->owner->plan != 'project';
    }

    /**
     * A user must be part of a project to be able to change their email upload address
     * @param User    $user
     * @param Project $project
     * @return mixed
     */
    public function refreshEmailAddress(User $user, Project $project)
    {
        return $project->members->contains($user);

    }
}
