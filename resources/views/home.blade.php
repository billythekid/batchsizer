@extends('layouts.app')

@section('content')
    <div class="container">

        <div class="panel panel-info">
            <div class="panel-heading">Thanks for your support! <i class="pull-right fa fa-compress minimise-toggle"></i></div>
            <div class="panel-body">
                <p>Thank you for trying BatchSizer during it's beta phase. During this time you may experience some layout changes, functional improvements and other small issues.</p>
                <p>We would love to hear any feedback using the button at the top. Do you want some other functionality? Is something not working how you expected? Please, please let us know.</p>
                <p>Thanks once again,<br>Billy</p>
            </div>
        </div>

        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
                <a href="#projects" aria-controls="projects" role="tab" data-toggle="tab">Projects</a>
            </li>
            <li role="presentation">
                <a href="#account" aria-controls="account" role="tab" data-toggle="tab">Account</a>
            </li>
            <li role="presentation">
                <a href="#plan" aria-controls="plan" role="tab" data-toggle="tab">Plan</a>
            </li>
        </ul>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="projects">
                @include('projects.list')
            </div>
            <div role="tabpanel" class="tab-pane" id="account">
                @include('account.details')
            </div>
            <div role="tabpanel" class="tab-pane" id="plan">
                @include('account.changePlan')
            </div>
        </div>
    </div>

@endsection

@section('scripts')
    <script>
        $('.plan-option').on('change', 'input[type=radio]', function () {
            // TODO turn this on
            // $('.plan-button').prop('disabled',false);
            $('.plan-option').addClass('faded');
            $(this).parents('.plan-option').removeClass('faded');
        });
    </script>
@endsection


