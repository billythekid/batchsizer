<?php

namespace App;

use Mpociot\Teamwork\TeamInvite;
use Mpociot\Teamwork\TeamworkTeam;

class Team extends TeamworkTeam
{

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function pendingInvites()
    {
        return $this->hasMany(TeamInvite::class);
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }

    public function members()
    {
        return $this->belongsToMany(User::class);
    }

}