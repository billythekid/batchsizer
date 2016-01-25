@if($project->owner == Auth::user())
    <div class="panel panel-default">
        <div class="panel-heading">Project Owner's Tools</div>
        <div class="panel-body">
            <form action="{{ route('project.update', $project) }}" method="post">
                {!! csrf_field() !!}
                <input type="hidden" name="_method" value="PUT">
                <div class="form-group">
                    <label for="name">Project Name:</label>
                    <input type="text" name="name" id="name" class="form-control" value="{{ $project->name }}"
                           placeholder="Project Name">
                </div>
                @if(Auth::user()->plan() == 'agency')
                    @include('projects.teamMembers')
                @endif
                <div class="form-group">
                    <button class="btn btn-primary form-control">Update Project</button>
                </div>
            </form>
        </div>
    </div>
@endif