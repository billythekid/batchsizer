<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CommonSize extends Model
{
    protected $fillable = ['type', 'width', 'height', 'description'];
}
