@if($project->owner == Auth::user())
    <div class="panel panel-info">
        <div class="panel-heading">Project Owner's Tools <i class="pull-right fa fa-compress minimise-toggle"></i></div>
        <div class="panel-body">
            <form action="{{ route('project.update', $project) }}" method="post">
                {!! csrf_field() !!}
                <div class="col-md-6">
                    <input type="hidden" name="_method" value="PUT">
                    <div class="form-group">
                        <label for="name">Project Name:</label>
                        <input type="text" name="name" id="name" class="form-control" value="{{ $project->name }}"
                               placeholder="Project Name">
                    </div>
                    @if(Auth::user()->plan() == 'agency')
                        @include('projects.teamMembers')
                    @endif
                </div>
                <div class="col-md-6">
                    <div class="col-sm-offset-1 checkbox checkbox-info">
                        <input class="styled" type="checkbox" name="save_uploads" id="save-uploads"@if($project->save_uploads) checked @endif>
                        <label id="responsive-label" for="save-uploads">Save Uploads?</label><br>
                        <input class="styled" type="checkbox" name="save_resized_zips" id="save-resized"@if($project->save_resized_zips) checked @endif>
                        <label id="noupscale-label" for="save-resized">Save Resized Zip Files?</label>

                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <button class="btn btn-primary form-control">Update Project</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endif