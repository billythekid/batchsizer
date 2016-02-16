@extends('layouts.app')
@section('title', "")
@section('content')
    <div class="panel panel-info">
        <div class="panel-heading">{{ $team->name }}</div>
        <div class="panel-body">

            <div class="row">
                <div class="col-md-4">
                    <h4>Invite a new member</h4>
                    <form action="{{ route('team.invite',$team) }}" method="post">
                        {!! csrf_field() !!}
                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="teamname">Email:</label>
                            <input type="text" name="email" id="email"
                                   class="form-control"
                                   value="{{ old('email') }}">
                            @if ($errors->has('email'))
                                <span class="help-block"><strong>{{ $errors->first('email') }}</strong></span>
                            @endif
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary form-control"><i class="fa fa-plus-square"></i> Invite User
                            </button>
                        </div>
                    </form>

                </div>
                <div class="col-md-4">
                    <h4>Pending Invites</h4>
                    @foreach($team->pendingInvites as $invite)
                        <p>{{ $invite->email }}</p>
                    @endforeach
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <h3>Team Members</h3>
                    <p>Drag users in and out of your team</p>
                </div>
                <div class="col-md-6">
                    <ul id="in-team" class="team-member-list list-group">
                        <li class="lead list-group-item placeholder">Current team members</li>
                        @foreach($team->users as $member)
                            <li class="{{ $team->owner->id == $member->id ? 'owner placeholder' : '' }} list-group-item"
                                data-userid="{{ $member->id }}">
                                <i class="fa {{ $team->owner->id != $member->id ? 'fa-arrows handle' : 'fa-lock' }}"></i>
                                {{ $member->name }} {{ $team->owner->id == $member->id ? '(owner)' : '' }}
                            </li>
                        @endforeach
                    </ul>
                </div>


                <div class="col-md-6">
                    <ul id="out-team" class="team-member-list list-group">
                        <li class="lead list-group-item placeholder">Available users from your other teams</li>
                        @foreach(Auth::user()->allTeamMembers()->reject(function ($value) use($team) {
                            return (($team->owner->email == $value->email) || ($team->users->contains($value)));
                        }) as $email=>$member)
                            <li class="list-group-item" data-userid="{{ $member->id }}"><i
                                        class="fa fa-arrows handle"></i> {{ $member->name }} </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        $('.team-member-list').sortable({
            forcePlaceholderSize: true,
            connectWith: '.js-connected',
            items: 'li:not(.placeholder)',
            placeholderClass: 'btn btn-blue',
            placeholder: '<p class="center-block bg-info">Drop Here</p>'

        }).bind('sortupdate', function (e, ui) {
            if (ui.startparent.attr('id') != ui.endparent.attr('id')) {
                if (ui.endparent.attr('id') == 'in-team') {
                    $.get('{{ route('addTeamMember',$team->id) }}?userID=' + ui.item.data('userid'))
                            .success(function (data) {
                                swal({
                                    title: data.title,
                                    text: data.message,
                                    type: data.type,
                                    timer: 1250,
                                    showConfirmButton: false
                                });
                            });
                }
                if (ui.endparent.attr('id') == 'out-team') {
                    $.get('{{ route('removeTeamMember',$team->id) }}?userID=' + ui.item.data('userid'))
                            .success(function (data) {
                                swal({
                                    title: data.title,
                                    text: data.message,
                                    type: data.type,
                                    timer: 1250,
                                    showConfirmButton: false
                                });
                            });
                }
            }
            /*

             This event is triggered when the user stopped sorting and the DOM position has changed.

             ui.item contains the current dragged element.
             ui.index contains the new index of the dragged element (considering only list items)
             ui.oldindex contains the old index of the dragged element (considering only list items)
             ui.elementIndex contains the new index of the dragged element (considering all items within sortable)
             ui.oldElementIndex contains the old index of the dragged element (considering all items within sortable)
             ui.startparent contains the element that the dragged item comes from
             ui.endparent contains the element that the dragged item was added to (new parent)

             */
        });
    </script>
@endsection