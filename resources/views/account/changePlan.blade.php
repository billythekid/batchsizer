<div class="panel panel-info">
    <div class="panel-heading">Your Plan Details</div>
    <div class="panel-body">

        <div class="col-md-4">
            <h3>Current Plan</h3>
        </div>
        <div class="col-md-8">
            <h3>Other Plans</h3>
            <button class="btn btn-primary plan-button" disabled>Change to Selected Plan</button>
        </div>
        <div class="current-plan">
            @include('_includes.planDetails.'.$user->plan)
        </div>
        <div class="other-plans">
            <form action="{{ route('changePlan', $user) }}" method="post">
                {!! csrf_field() !!}

            @foreach(['project','freelancer','agency'] as $planOption)
                    <div class="faded plan-option">
                        @if($planOption != $user->plan)
                            <label class="btn-block">
                                @include('_includes.planDetails.'.$planOption)
                                <input type="radio" name="newPlan" value="{{ $planOption }}" class="hidden">
                            </label>
                        @endif
                    </div>
                @endforeach
            </form>
        </div>
    </div>
</div>