<h2>Projects</h2>
@foreach(Auth::user()->projects as $project)
    <p><a href="{{ route('project.show', $project) }}">{{ $project->name }}</a></p>
@endforeach