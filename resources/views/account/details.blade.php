<div class="panel panel-default">
    <div class="panel-heading">Account - ({{ ucfirst(Auth::user()->plan()) }} account)</div>

    <div class="panel-body">
        <form action="" method="post">
            {!! csrf_field() !!}
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" class="form-control" value="{{ $user->name }}"
                       placeholder="Name">
            </div>
            <div class="form-group">
                <button class="btn btn-primary form-control"><i class="fa fa-user"></i> Update Account Details</button>
            </div>
        </form>
    </div>
</div>