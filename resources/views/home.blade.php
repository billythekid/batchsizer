@extends('layouts.app')

@section('content')
    <div class="container">
        @if($pendingInvites->count() > 0)
            <div class="alert alert-warning">
                <p>You have been invited to the following {{ str_plural('team', $pendingInvites->count()) }}</p>
                <hr class="invisible">
                @foreach($pendingInvites as $invite)
                        <?php $team = \App\Team::find($invite->team_id) ?>
                        {{ $team->owner->name }} / {{ $team->name }} -
                    <form action="{{ route('handleInvite',$invite->accept_token) }}" class="form-inline">
                        {!! csrf_field() !!}
                        <button class="btn btn-success">Accept Invite</button>
                    </form>
                    <form action="{{ route('handleInvite',$invite->deny_token) }}">
                        {!! csrf_field() !!}
                        <button class="btn btn-danger">Reject Invite</button>
                    </form>
                @endforeach
            </div>
        @endif

        <div class="panel panel-info">
            <div class="panel-heading">Thanks for your support! <i
                        class="pull-right fa fa-compress minimise-toggle"></i></div>
            <div class="panel-body">
                <p>Thank you for trying BatchSizer during it's beta phase. During this time you may experience some
                    layout changes, functional improvements and other small issues.</p>
                <p>We would love to hear any feedback using the button at the top. Do you want some other functionality?
                    Is something not working how you expected? Please, please let us know.</p>
                <p>Thanks once again,<br>Billy</p>
            </div>
        </div>

        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
                <a href="#projects" aria-controls="projects" role="tab" data-toggle="tab">Projects</a>
            </li>
            @if($user->plan == 'agency')
                <li role="presentation">
                    <a href="#teams" aria-controls="teams" role="tab" data-toggle="tab">Teams</a>
                </li>
            @endif
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
            @if($user->plan == 'agency')
                <div role="tabpanel" class="tab-pane" id="teams">
                    @include('account.teams')
                </div>
            @endif
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
        (function () {
            $('.plan-option').on('change', 'input[type=radio]', function () {
                // TODO turn this on
                // $('.plan-button').prop('disabled',false);
                $('.plan-option').addClass('faded');
                $(this).parents('.plan-option').removeClass('faded');
            });

            var hash = '{{ session('tab') }}';
            if (hash) {
                var target = '.nav-tabs a[href="#' + hash + '"]';
                $(target).tab('show');
            }

        })()
    </script>
@endsection


