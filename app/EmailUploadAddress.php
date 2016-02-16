<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmailUploadAddress extends Model
{
    protected $fillable = ['email','user_id','project_id'];

    protected $visible = ['email', 'project', 'user'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
