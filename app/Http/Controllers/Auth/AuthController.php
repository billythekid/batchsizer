<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AuthController extends Controller
{

    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'stripeToken' => 'required',
            'name'        => 'required|max:255',
            'email'       => 'required|email|max:255|unique:users',
            'password'    => 'required|confirmed|min:6',
        ], ['stripeToken.required' => 'There was a problem with your credit card details']);
    }

    public function register(Request $request, $plan)
    {
        $validator = $this->validator($request->all());

        if ($validator->fails())
        {
            $this->throwValidationException(
                $request, $validator
            );
        }


        Auth::guard($this->getGuard())->login($this->create($request->all()));

        $user = Auth::user();

        $token = $request->input('stripeToken');

        if ($plan == 'project')
        {
            $user->createAsStripeCustomer($token);
            $user->charge('500', ['description' => 'Project Account Purchase']);
        }

        if ($plan == 'freelancer')
        {
            $user->newSubscription('freelancer', 'batchsizer-freelancer')->create($token);
        }

        if ($plan == 'agency')
        {
            $user->newSubscription('agency', 'batchsizer-agency')->create($token);
        }

        return redirect($this->redirectPath());
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }
}
