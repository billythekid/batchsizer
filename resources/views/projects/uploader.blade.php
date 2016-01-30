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
                <div class="col-xs-3 col-sm-offset-1 labels">
                    <div class="checkbox checkbox-info">
                        <input class="styled" type="checkbox" name="responsive" id="responsive" checked>
                        <label id="responsive-label" for="responsive">Responsive?</label><br>
                        <input class="styled" type="checkbox" name="noupscale" id="noupscale" checked>
                        <label id="noupscale-label" for="noupscale">Prevent upscaling?</label>
                        <input class="styled" type="checkbox" name="aspectratio" id="aspectratio" checked>
                        <label id="aspectratio-label" for="aspectratio">Maintain Aspect Ratio?</label>
                        <input class="styled" type="checkbox" name="greyscale" id="greyscale">
                        <label id="greyscale-label" for="greyscale">Black &amp; White images?</label>
                    </div>
                    <label id="pixelate-label" for="pixelate">Pixelate images?</label>
                    <select name="pixelate" id="pixelate">
                        <option value="0">Select Pixel Size</option>
                        <option value="xs">XS (2px)</option>
                        <option value="s">S (4px)</option>
                        <option value="m">M (6px)</option>
                        <option value="l">L (10px)</option>
                        <option value="xl">XL (20px)</option>
                    </select>
                    @if($project->save_resized_zips) {{-- Otherwise where will they go? --}}
                        <div class="checkbox checkbox-info">
                            <input class="styled" type="checkbox" name="download" id="download" checked>
                            <label id="download-label" for="download">Download immediately?</label>
                        </div>
                    @endif
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
