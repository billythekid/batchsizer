@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard - ({{ ucfirst(Auth::user()->plan()) }} account)</div>

                    <div class="panel-body">
                        @if (Auth::user()->plan() != 'project' || Auth::user()->projects()->count() == 0)
                            <form action="{{ route('project.store') }}" method="post">
                                {!! csrf_field() !!}
                                <div class="form-group">
                                    <label for="name">Project Name:</label>
                                    <input type="text" name="name" id="name" class="form-control"
                                           value="{{ old('name') }}">
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary form-control">Create Project</button>
                                </div>
                            </form>
                        @endif
                        <hr>
                            @include('projects.list')

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
