<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use Laravel\Cashier\Billable;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
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
        $this->middleware('guest', ['except' => ['logout', 'updateUser']]);
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
        $customer = $user->createAsStripeCustomer($token);

        // no idea why we can't create the subscription withCoupon, so let's
        // assign it to the customer here.
        if ($request->has('coupon'))
        {
            $customer->coupon = $request->input('coupon');
            $customer->save();
        }
        if ($plan == 'project')
        {
            if (!$user->charge('500', ['description' => 'Project Account Purchase']))
            {
                $user->active = false;
                $user->save();
            };

            return redirect($this->redirectPath());
        }

        try
        {
            $user->newSubscription($plan, 'batchsizer-' . $plan)->create($token);
        }
        catch (Exception $e)
        {
            return back()->withError($e->getMessage());
        }

        return redirect($this->redirectPath());
    }

    public function changePlan(Request $request, User $user)
    {
        alert()->info('BetaMode', "Sorry, we have still to hook this up. Thanks for your patience while we are in beta.");
        return redirect()->back();
    }


    public function updateUser(Request $request, User $user)
    {
        if ($request->user()->id !== $user->id)
        {
            abort(403);
        }

        $validator = Validator::make($request->all(), [
            'name'     => 'max:255',
            'email'    => "email|max:255|unique:users,email,{$user->id}",
            'password' => 'confirmed|min:6',
        ]);
        if ($validator->fails())
        {
            return redirect()
                ->back()
                ->withErrors($validator)
                ->withInput()
                ->with('tab', 'account');
        }

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        if ($request->has('password'))
        {
            $user->password = bcrypt($request->input('password'));
        }
        $user->save();

        alert()->success('Updated!', 'Your account has been updated');

        return redirect()->back()->with('tab','account');
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
