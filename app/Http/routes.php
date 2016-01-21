<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/


use App\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Input;

Route::group(['middleware' => ['web']], function ()
{
    if (App::environment('local'))
    {

        Route::get('login', 'Auth\AuthController@showLoginForm')->name('login');
        Route::post('login', 'Auth\AuthController@login');
        Route::get('logout', 'Auth\AuthController@logout')->name('logout');

        // Registration Routes...
        Route::post('register/{plan}', 'Auth\AuthController@register')->name('register');

        // Password Reset Routes...
        Route::get('password/reset/{token?}', 'Auth\PasswordController@showResetForm');
        Route::post('password/email', 'Auth\PasswordController@sendResetLinkEmail');
        Route::post('password/reset', 'Auth\PasswordController@reset');


        Route::get('/home', 'HomeController@index');
        Route::get('about', function ()
        {
            return view()->make('about');
        })->name('about');

        Route::get('signup/{plan}', 'SignupController@showPlan')->middleware('guest')->name('signup');


        Route::post(
            'stripe/webhook',
            '\Laravel\Cashier\Http\Controllers\WebhookController@handleWebhook'
        );
    }


    Route::get('/', function ()
    {
        $channel = md5(str_random() . time());

        return view('index', compact('channel'));
    });
    Route::post('batchsizer', 'ResizeController@resize')->name('batchsizer');

    Route::get('batches/{batch}', 'ResizeController@serveBatch');

    Route::post('feedback', function ()
    {
        $feedback = request()->get('feedback');
        Mail::send('emails.feedback', compact('feedback'), function ($message)
        {
            $message->subject('New feedback from BatchSizer');
            $message->from('noreply@batchsizer.co.uk', 'BatchSizer');
            $message->to('billy@the-kid.org');
        });
        alert()->success('Thank You', "Your feedback was sent.");

        return redirect()->back();
    })->name('feedback');


});
