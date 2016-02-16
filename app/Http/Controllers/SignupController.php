<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\App;

class SignupController extends Controller
{

    public function showPlan($plan)
    {
        if (App::environment() != 'local')
        {
            if (!in_array($plan, ['project', 'freelancer']))
            {
                abort(404);
            }
        }

        $plan = ucfirst($plan);

        return view()->make("auth.register", compact('plan'));
    }
}
