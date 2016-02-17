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

Route::post(
    'stripe/webhook',
    '\Laravel\Cashier\Http\Controllers\WebhookController@handleWebhook'
);

Route::post(
    'emailResize',
    'ProjectController@resizeByEmail'
);

Route::group(['middleware' => ['web']], function ()
{

    Route::get('signup/{plan}', 'SignupController@showPlan')->middleware('guest')->name('signup');
    Route::get('invite/thanks', function(){
        return view('teams.inviteDenied');
    })->name('inviteDenied');
    Route::get('invite/{token}', 'TeamController@handleInvite')->name('handleInvite');


    Route::group(['middleware' => ['auth']], function ()
    {
        Route::get('/home', 'HomeController@index')->name('home');

        Route::post('invite-user', 'SignupController@inviteUser')->name('inviteUser');
        Route::resource('team', 'TeamController');
        Route::post('team/invite/{team}', 'TeamController@invite')->name('team.invite');
        Route::get('team/addMember/{team}', 'TeamController@addMember')->name('addTeamMember');
        Route::get('team/removeMember/{team}', 'TeamController@removeMember')->name('removeTeamMember');

        Route::resource('project', 'ProjectController');
        Route::post('account/update/{user}', 'Auth\AuthController@updateUser')->name('updateUser');
        Route::post('plan/update/{user}', 'Auth\AuthController@changePlan')->name('changePlan');
        Route::post('resize/{project}', 'ProjectController@handleUploads')->name('projectResize');
        Route::post('project/{project}/email', 'ProjectController@refreshEmailAddress')->name('refreshEmailUploadAddress');

        // immediate download after resizing.
        Route::get('download/{project}/{directory}/{file}', 'ProjectController@downloadProjectZip')->name('downloadProjectZip');
        // thumbnail generation.
        Route::get('file/{directory}/{project}/{filename}', 'ProjectController@getUploadedImage')->name('getUploadedImage');

        // files saved on storage.
        Route::post('renameFile/{project}', 'ProjectController@renameProjectFile')->name('renameProjectFile');
        Route::post('getFile/{project}', 'ProjectController@downloadProjectFile')->name('downloadProjectFile');
        Route::delete('deleteFile/{project}', 'ProjectController@deleteFile')->name('deleteFile');

        Route::get('user/invoice/{invoice}', function ($invoiceId)
        {
            return Auth::user()->downloadInvoice($invoiceId, [
                'vendor'  => 'BatchSizer.co.uk',
                'product' => 'Subscription',
            ]);
        });

    });


    Route::get('/', function ()
    {
        $channel = md5(str_random() . time());

        return view('index', compact('channel'));
    })->middleware('guest');
    Route::get('about', function ()
    {
        return view()->make('about');
    })->name('about');
    Route::get('examples', function ()
    {
        return view()->make('examples.index');
    })->name('examples');

    Route::post('feedback', function ()
    {
        $feedback = request()->get('feedback');
        $user = (Auth::check()) ? Auth::user()->name . "(".Auth::user()->id.")" : "Anonymous";
        Mail::send('emails.feedback', compact('feedback'), function ($message) use ($user)
        {
            $message->subject('BatchSizer Feedback from '. $user);
            $message->from('noreply@batchsizer.co.uk', 'BatchSizer');
            $message->to('billy@the-kid.org');
        });
        alert()->success('Thank You', "Your feedback was sent.");

        return redirect()->back();
    })->name('feedback');

    Route::get('login', 'Auth\AuthController@showLoginForm')->name('login');
    Route::post('login', 'Auth\AuthController@login');
    Route::get('logout', 'Auth\AuthController@logout')->name('logout');
    Route::post('register/{plan}', 'Auth\AuthController@register')->name('register');
    Route::get('password/reset/{token?}', 'Auth\PasswordController@showResetForm');
    Route::post('password/email', 'Auth\PasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\PasswordController@reset');

    Route::post('batchsizer', 'ResizeController@resize')->name('batchsizer');
    Route::get('batches/{batch}', 'ResizeController@serveBatch');
});
