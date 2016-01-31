<?php

namespace App;

use Laravel\Cashier\Billable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Billable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'stripe_id'
    ];

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }

    public function plan()
    {
        if ( $this->subscriptions()->count() == 0 )
        {
            return 'project';
        }
        return $this->subscriptions()->first()->name;
    }

    public function getPlanAttribute()
    {
        return $this->plan();
    }


}
