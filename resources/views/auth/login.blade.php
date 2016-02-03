@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-info">
                    <div class="panel-heading">Login</div>
                    <div class="panel-body">
                        @include('_includes.loginForm')
                    </div>
                </div>
            </div>

            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-info">
                    <div class="panel-heading">Not yet registered?</div>
                    <div class="panel-body">
                        <p>Our accounts give a number of additional benefits and functionality.</p>
                        @include('_includes.plans')</div>
                </div>


            </div>
        </div>
    </div>
@endsection
