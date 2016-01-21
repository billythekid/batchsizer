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


use Illuminate\Support\Facades\Mail;

Route::group(['middleware' => ['web']], function ()
{
    Route::auth();

    Route::get('/home', 'HomeController@index');
    Route::get('/', function ()
    {
        $channel = md5(str_random() . time());

        return view('index',compact('channel'));
    });
    Route::post('batchsizer', 'ResizeController@resize')->name('batchsizer');

    Route::get('batches/{batch}', 'ResizeController@serveBatch');

    Route::post('feedback', function(){
        $feedback = request()->get('feedback');
        Mail::send('emails.feedback', compact('feedback'), function ($message) {
            $message->subject('New feedback from BatchSizer');
            $message->from('noreply@batchsizer.co.uk', 'BatchSizer');
            $message->to('billy@the-kid.org');
        });
        alert()->success('Thank You', "Your feedback was sent.");
        return redirect()->back();
    })->name('feedback');

    Route::get('about', function(){
        return view()->make('about');
    })->name('about');
});
