<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmailUploadAddress extends Model
{
    protected $fillable = ['email','user_id','project_id'];

    protected $visible = ['email'];

    public function user()
    {
        return $this->hasOne(User::class);
    }

    public function project()
    {
        return $this->hasOne(Project::class);
    }
}
