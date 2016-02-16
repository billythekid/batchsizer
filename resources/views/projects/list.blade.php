<div class="panel panel-info">
    <div class="panel-heading">Projects</div>
    <div class="panel-body">
        @if($user->plan == 'team')
            You are currently on a team invite account. You can upgrade your plan to create your own projects by clicking the "Plan" tab above.
        @elseif(Auth::user()->plan() != 'project' || Auth::user()->projects()->count() == 0)
            <h3>Add New Project</h3>
            <form action="{{ route('project.store') }}" method="post">
                {!! csrf_field() !!}
                <div class="form-group">
                    <label for="projectname">Project Name:</label>
                    <input type="text" name="projectname" id="projectname"
                           class="form-control{{ $errors->has('projectname') ? ' has-error' : '' }}"
                           value="{{ old('projectname') }}">
                    @if ($errors->has('projectname'))
                        <span class="help-block"><strong>{{ $errors->first('projectname') }}</strong></span>
                    @endif
                </div>
                <div class="form-group">
                    <button class="btn btn-primary form-control"><i class="fa fa-plus-square"></i> Create Project
                    </button>
                </div>
            </form>
            <hr>
        @endif
        @foreach(Auth::user()->projects()->orderBy('name')->get() as $project)
            <p><a href="{{ route('project.show', $project) }}">{{ $project->name }}</a></p>
        @endforeach
    </div>
</div>