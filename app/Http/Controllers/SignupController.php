<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SignupController extends Controller
{

    public function showPlan($plan)
    {
        $plan = ucfirst($plan);

        switch ($plan)
        {
            case 'Freelancer':
                $price = [
                    'amount' => '1000',
                    'human'  => '$10/month',
                ];
                break;
            case 'Agency':
                $price = [
                    'amount' => '2500',
                    'human'  => '25/month',
                ];
                break;
            case 'Project':
                $price = [
                    'amount' => '500',
                    'human'  => '$5 one off fee',
                ];
                break;
            default:
                $price = [
                    'amount' => '10000',
                    'human' => '$100/month'
                ];
                break;
        }

        return view()->make("auth.register", compact('plan', 'price'));
    }
}
