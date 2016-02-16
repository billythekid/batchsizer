<?php

namespace App\Policies;

use App\Team;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TeamPolicy
{

    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function show(User $user, Team $team)
    {
        return $user->isOwnerOfTeam($team);
    }

    public function invite(User $user, Team $team)
    {
        return $user->isOwnerOfTeam($team);
    }

    public function addMember(User $user, Team $team)
    {
        return $user->isOwnerOfTeam($team);
    }
    public function removeMember(User $user, Team $team)
    {
        return $user->isOwnerOfTeam($team);
    }

}
