<div class="panel panel-default">
    <div class="panel-heading">Upload Resizer</div>
    <div class="panel-body">
        <form id="account-zone" action="{{ route('projectResize', $project) }}" method="post" class="dropzone btkzone">
            {!! csrf_field() !!}
            <input type="hidden" name="channel" value="{{ $channel }}">
            <div class="form-group">
                <div class="col-xs-8">
                    <input type="text" name="dimensions" id="dimensions" class="form-control"
                           value="{{ old('dimensions') }}"
                           placeholder="Widths[x Heights] e.g 200, 1024, 200x300, 800, 400x500">
                </div>
                <div class="col-xs-3 col-sm-offset-1 checkbox checkbox-info">
                    <input class="styled" type="checkbox" name="responsive" id="responsive" checked>
                    <label id="responsive-label" for="responsive">Responsive?</label><br>
                    <input class="styled" type="checkbox" name="noupscale" id="noupscale" checked>
                    <label id="noupscale-label" for="noupscale">Prevent upscaling?</label>

                </div>

                <div class="clearfix"></div>
            </div>
        </form>
    </div>
</div>
@include('_includes.progress')

<div class="panel panel-default">
    <div class="panel-heading">Uploaded Project Files</div>
    <div class="panel-body">
        <div id="uploaded-project-files"></div>
    </div>
</div>
