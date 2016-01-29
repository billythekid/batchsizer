@extends('layouts.app')

@section('content')
    <div class="container">
        <!-- Nav tabs -->

        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active">
                        <a href="#account" aria-controls="account" role="tab" data-toggle="tab">Account</a>
                    </li>
                    <li role="presentation">
                        <a href="#projects" aria-controls="projects" role="tab" data-toggle="tab">Projects</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="account">
                        @include('account.details')
                    </div>
                    <div role="tabpanel" class="tab-pane" id="projects">
                        @include('projects.list')
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
