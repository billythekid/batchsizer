<?php

namespace App;

use Faker\Factory;
use Laravel\Cashier\Billable;
use Illuminate\Support\Collection;
use Mpociot\Teamwork\Traits\UserHasTeams;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable
{

    use Billable;
    use UserHasTeams;

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
        'password', 'remember_token', 'stripe_id',
    ];

    /**
     * A user can access many projects
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }

    /**
     * Get the Stripe supported currency used by the entity.
     *
     * @return string
     */
    public function preferredCurrency()
    {
        return 'gbp';
    }


    /**
     * A user has project access or has a subscription plan.
     * @return string
     */
    public function plan()
    {
        if ($this->hasStripeId())
        {
            if ($this->subscriptions()->count() == 0)
            {
                return 'project';
            }

            return $this->subscriptions()->first()->name;
        }

        return 'team';
    }

    public function getPlanAttribute()
    {
        return $this->plan();
    }


    /**
     * If a user has their own teams (agencies) then we can get all the members of all the teams like this...
     * @return Collection
     */
    public function allTeamMembers()
    {
        $users = collect([]);
        foreach ($this->ownedTeams as $team)
        {
            foreach ($team->users as $user)
            {
                $users = $users->merge([$user->email => $user]);
            }
        }

        return $users;
    }

    public function emailUploadAddress(Project $project)
    {
        $emailUploadAddress = EmailUploadAddress::firstOrCreate(['project_id' => $project->id, 'user_id' => $this->id]);
        if (empty($emailUploadAddress->email))
        {
            $faker = Factory::create();
            $email = $faker->userName . "@mg.batchsizer.co.uk";
            while (!empty(EmailUploadAddress::where('email', $email)->first()))
            {
                $email = $faker->userName . "@mg.batchsizer.co.uk";
            }
            $emailUploadAddress->email = $email;
            $emailUploadAddress->save();
        }
        return $emailUploadAddress;
    }


}
