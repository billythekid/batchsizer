<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $fillable = ['user_id', 'name'];

    /**
     * The creator of the project
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner()
    {
        return $this->belongsTo(User::class,'user_id');
    }

    public function members()
    {
        return $this->belongsToMany(User::class);
    }

    public function teams()
    {
        return $this->belongsToMany(Team::class);
    }

    public function teamMembers()
    {
        $members = [];
        foreach ($this->teams as $team)
        {
            $members[] = $team->members;
        }
        return collect($members)->flatten();

    }

    public function getTeamMembersAttribute()
    {
        return $this->teamMembers();
    }


}
