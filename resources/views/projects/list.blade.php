<div class="panel panel-info">
    <div class="panel-heading">Projects</div>
    <div class="panel-body">
        @if (Auth::user()->plan() != 'project' || Auth::user()->projects()->count() == 0)
            <h3>Add New Project</h3>
            <form action="{{ route('project.store') }}" method="post">
                {!! csrf_field() !!}
                <div class="form-group">
                    <label for="name">Project Name:</label>
                    <input type="text" name="name" id="name" class="form-control"
                           value="{{ old('name') }}">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary form-control"><i class="fa fa-plus-square"></i> Create Project</button>
                </div>
            </form>
            <hr>
        @endif
        @foreach(Auth::user()->projects()->orderBy('name')->get() as $project)
            <p><a href="{{ route('project.show', $project) }}">{{ $project->name }}</a></p>
        @endforeach
    </div>
</div>