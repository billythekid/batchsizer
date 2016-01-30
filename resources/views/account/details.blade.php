<div class="panel panel-info">
    <div class="panel-heading">Account - ({{ ucfirst(Auth::user()->plan()) }} account)</div>

    <div class="panel-body">
        @if(count($errors) > 0)
            <div class="alert alert-danger">
                @foreach($errors->all() as $error)
                    <p>{{ $error }}</p>
                @endforeach
            </div>
        @endif
        <form action="{{ route('updateUser', Auth::user()) }}" method="post">
            {!! csrf_field() !!}
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" class="form-control" value="{{ $user->name }}"
                       placeholder="Name">
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" name="email" id="email" class="form-control" value="{{ $user->email }}"
                       placeholder="Email">
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" class="form-control">
                <label for="password_confirmation">Confirm Password:</label>
                <input type="password" name="password_confirmation" id="password_confirmation" class="form-control">
            </div>
            <div class="form-group">
                <button class="btn btn-primary form-control"><i class="fa fa-user"></i> Update Account Details</button>
            </div>
        </form>
    </div>
</div>