<?php

namespace App\Http\Controllers;

use Auth;
use App\Team;
use App\User;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Mpociot\Teamwork\Facades\Teamwork;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Contracts\Validation\ValidationException;


class TeamController extends Controller
{

    public function index()
    {
        abort(404);
    }

    public function create()
    {
        abort(404);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->user()->plan != 'agency')
        {
            abort(403);
        }
        $validator = Validator::make($request->all(), ['teamname' => 'required'], ['teamname.required' => 'A team must have a name']);
        if ($validator->fails())
        {
            alert()->error('Error', 'There was a problem saving your team');

            return redirect()
                ->back()
                ->withErrors($validator)
                ->withInput()
                ->with('tab', 'teams');
        }
        $team = new Team();
        $team->owner_id = $request->user()->id;
        $team->name = $request->input('teamname');
        $team->save();
        $request->user()->attachTeam($team);

        return redirect()->route('team.show', $team);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $team
     * @return \Illuminate\Http\Response
     */
    public function show(Team $team)
    {
        $this->authorize($team);

        return view()->make('teams.show', compact('team'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $team
     * @return \Illuminate\Http\Response
     */
    public function edit(Team $team)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int                      $team
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Team $team)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $team
     * @return \Illuminate\Http\Response
     */
    public function destroy(Team $team)
    {
        //
    }

    public function invite(Request $request, Team $team)
    {
        $this->authorize($team);
        $this->validate($request, ['email' => 'required|email']);

        $email = $request->input('email');
        Teamwork::inviteToTeam($email, $team, function ($invite)
        {
            Mail::send('emails.inviteToTeam', compact('invite'), function ($message) use ($invite)
            {
                $message->subject('BatchSizer Invitation from ' . $invite->team->owner->name);
                $message->from('noreply@batchsizer.co.uk', 'BatchSizer');
                $message->to($invite->email);
            });
            alert()->success('Invite Sent', "An email was sent to {$invite->email} asking them to join {$invite->team->name}");
        });

        return redirect()->back();
    }


    public function handleInvite($token)
    {
        $invite = Teamwork::getInviteFromDenyToken($token);
        if ($invite)
        {
            Teamwork::denyInvite($invite);

            return redirect()->route('inviteDenied');
        }

        $invite = Teamwork::getInviteFromAcceptToken($token);
        if ($invite)
        {

            try
            {
                $user = User::where(['email' => $invite->email])->firstOrFail();
                alert()->overlay('Thanks!', "You have been added to the team. Projects you have been added to will appear in your projects list.", "info");
            }
            catch (ModelNotFoundException $e)
            {
                $password = str_random(13);
                $user = User::create(['email' => $invite->email, 'password' => bcrypt($password)]);
                alert()->overlay('Welcome!', "Please copy or change this password for your account:\n{$password}\n\n", "info");
            }

            Auth::login($user);
            Teamwork::acceptInvite($invite);

            return redirect()->route('home');
        }

        return redirect()->route('home');
    }

    public function addMember(Request $request, Team $team)
    {
        $this->authorize($team);
        if (!$request->ajax())
        {
            abort(404);
        }
        $user = User::find($request->input('userID'));
        if (!$request->user()->allTeamMembers()->has($user->email))
        {
            return response()->json(['title'   => "Error",
                                     'message' => "{$user->name} was not added to {$team->name} because they do not exist in any of your teams.",
                                     'type'    => 'error',
            ]);
        }
        $team->members()->attach($user->id);

        return response()->json(['title'   => "Success",
                                 'message' => "{$user->name} added to {$team->name}",
                                 'type'    => 'success',
        ]);
    }

    public function removeMember(Request $request, Team $team)
    {
        $this->authorize($team);
        if (!$request->ajax())
        {
            abort(404);
        }
        $user = User::find($request->input('userID'));
        if (!$request->user()->allTeamMembers()->has($user->email))
        {
            return response()->json(['title'   => "Error",
                                     'message' => "{$user->name} was not removed from {$team->name} because they do not exist in any of your teams.",
                                     'type'    => 'error',
            ]);
        }

        $team->members()->detach($user->id);
        return response()->json(['title'   => "Success",
                                 'message' => "{$user->name} removed from {$team->name}",
                                 'type'    => 'success',
        ]);
    }

}
