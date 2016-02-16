<div class="panel panel-info">
    <div class="panel-heading">Teams</div>
    <div class="panel-body">
        <h3>Add New Team</h3>
        <form action="{{ route('team.store') }}" method="post">
            {!! csrf_field() !!}
            <div class="form-group{{ $errors->has('teamname') ? ' has-error' : '' }}">
                <label for="teamname">Team Name:</label>
                <input type="text" name="teamname" id="teamname"
                       class="form-control"
                       value="{{ old('teamname') }}">
                @if ($errors->has('teamname'))
                    <span class="help-block"><strong>{{ $errors->first('teamname') }}</strong></span>
                @endif
            </div>
            <div class="form-group">
                <button class="btn btn-primary form-control"><i class="fa fa-plus-square"></i> Create Team</button>
            </div>
        </form>
        <hr>
        @foreach($user->teams()->orderBy('name')->get() as $team)
            <p><a href="{{ route('team.show', $team) }}">{{ $team->name }}</a></p>
        @endforeach
    </div>
</div>