<div class="col-md-12">
    <div class="row">

        <div class="col-md-6 projectMembers">
            <h3>Project Members</h3>
            <p>People ticked here will have access to this project</p>
            <div class="checkbox checkbox-info">
                @foreach(Auth::user()->allTeamMembers() as $member)
                    @if($member->id != $project->owner->id)
                        <div class="col-md-6">
                        <input id="member-{{ $member->id }}" type="checkbox" name="members[]" value="{{ $member->id }}"
                                {{ $project->members->contains($member) ? 'checked' : '' }}>
                        <label for="member-{{ $member->id }}"> {{ $member->name }}</label>
                        </div>
                    @endif
                @endforeach
            </div>

        </div>


        <div class="col-md-6 teams">
            <h3>Teams</h3>
            <p>For convenience you can add everyone from a team at once using these checkboxes.</p>
            <div class="checkbox checkbox-info">
                @foreach(Auth::user()->teams()->orderBy('name')->get() as $team)
                    <input id="team-{{ $team->id }}" type="checkbox" name="teams[]"
                           value="{{ $team->id }}">
                    <label for="team-{{ $team->id }}">{{ $team->name }}</label>
                    <br>
                @endforeach
            </div>
        </div>


    </div>
</div>