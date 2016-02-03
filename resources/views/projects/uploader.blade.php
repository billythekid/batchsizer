@include('_includes.progress')
<iframe id="ajax-download" style="display:none"></iframe>
<div class="row">
    <div class="col-md-12">
        <div class="panel panel-info">
            <div class="panel-heading">Upload Resizer</div>
            <div class="panel-body">

                <form id="account-zone" action="{{ route('projectResize', $project) }}" method="post"
                      class="dropzone btkzone">
                    {!! csrf_field() !!}
                    <input type="hidden" name="channel" value="{{ $channel }}">
                    <div class="form-group">
                        <div class="col-xs-12">
                            <input type="text" name="dimensions" id="dimensions" class="form-control"
                                   value="{{ old('dimensions') }}"
                                   placeholder="Widths[x Heights] e.g 200, 1024, 200x300, 800, 400x500">
                            <div class="col-md-4 ">
                                @include('projects.commonSizes')
                            </div>
                            <hr class="invisible">
                        </div>

                        <div class="col-sm-12 labels">
                            <div class="col-sm-8">
                                <div class="col-sm-12">
                                    <label>Image Quality</label><br>
                                    <input id="quality" name="quality" type="text" data-slider-min="1"
                                           data-slider-max="100"
                                           data-slider-step="1"
                                           data-slider-value="100" data-slider-id="qualityslider"/><br>
                                </div>
                                <div class="clearfix"></div>
                                <div class="checkbox checkbox-info">
                                    <input class="styled" type="checkbox" name="responsive" id="responsive" checked>
                                    <label id="responsive-label" for="responsive">Responsive?</label><br>
                                    <input class="styled" type="checkbox" name="noupscale" id="noupscale" checked>
                                    <label id="noupscale-label" for="noupscale">Prevent upscaling?</label><br>
                                    <input class="styled" type="checkbox" name="aspectratio" id="aspectratio" checked>
                                    <label id="aspectratio-label" for="aspectratio">Maintain Aspect Ratio?</label><br>
                                    @if($project->save_resized_zips) {{-- Otherwise where will they go? --}}
                                    <input class="styled" type="checkbox" name="download" id="download" checked>
                                    <label id="download-label" for="download">Download immediately?</label><br>
                                    @endif
                                    <hr class="invisible">
                                    <input class="styled" type="checkbox" name="greyscale" id="greyscale">
                                    <label id="greyscale-label" for="greyscale">Black &amp; White images?</label>
                                </div>
                            </div>
                            <div class="col-sm-4">

                                <div class="col-xs-6 col-sm-3">
                                    <p>R</p>
                                    <input id="red" name="red" type="text" data-slider-min="-100" data-slider-max="100"
                                           data-slider-step="1"
                                           data-slider-value="0" data-slider-orientation="vertical"
                                           data-slider-id="rb"/>
                                </div>
                                <div class="col-xs-6 col-sm-3">

                                    <p>G</p>
                                    <input id="green" name="green" type="text" data-slider-min="-100"
                                           data-slider-max="100"
                                           data-slider-step="1"
                                           data-slider-value="0" data-slider-orientation="vertical"
                                           data-slider-id="gb"/>
                                </div>
                                <div class="col-xs-6 col-sm-3">
                                    <p>B</p>
                                    <input id="blue" name="blue" type="text" data-slider-min="-100"
                                           data-slider-max="100"
                                           data-slider-step="1"
                                           data-slider-value="0" data-slider-orientation="vertical"
                                           data-slider-id="bb"/>
                                </div>
                                <div id="colourizehint" class="col-xs-6 col-sm-3"></div>
                                <div class="clearfix"></div>
                                {{--
                                <div class="col-sm-12">
                                    <label>Blur?</label><br>
                                    <input id="blur" name="blur" type="text" data-slider-min="0" data-slider-max="100"
                                           data-slider-step="1"
                                           data-slider-value="0" data-slider-id="blurslider"
                                           data-slider-enabled="false"
                                           disabled/>
                                </div>
                                --}}
                                <div class="col-sm-12">
                                    <hr class="invisible">
                                    <label id="pixelate-label" for="pixelate">Pixelate images?</label>
                                    <select name="pixelate" id="pixelate">
                                        <option value="0">Select Pixel Size</option>
                                        <option value="xs">XS (2px)</option>
                                        <option value="s">S (4px)</option>
                                        <option value="m">M (6px)</option>
                                        <option value="l">L (10px)</option>
                                        <option value="xl">XL (20px)</option>
                                    </select>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <hr>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
