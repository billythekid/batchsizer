@extends('layouts.app')
@section('content')
    <div class="content">
        <div class="title">BatchSizer</div>
        <form action="{{ route('batchsizer') }}" id="filezone" class="btkzone">
            {!! csrf_field() !!}
            <input type="hidden" name="channel" value="{{ $channel }}">
            <div class="form-group">
                <div class="col-xs-8">
                    <input type="text" name="dimensions" id="dimensions" class="form-control"
                           value="{{ old('dimensions') }}"
                           placeholder="Widths[x Heights] e.g 200, 1024, 200x300, 800, 400x500">
                </div>
                <div class="col-xs-4 checkbox checkbox-info">
                    <input class="styled" type="checkbox" name="responsive" id="responsive" checked>
                    <label id="responsive-label" for="responsive">Responsive?</label>
                </div>

                <div class="clearfix"></div>
                <div class="progress">
                    <div id="progress-bar" class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="0"
                         aria-valuemin="0"
                         aria-valuemax="100"
                         style="min-width: 2em; width: 2%;">
                        0%
                    </div>
                </div>
            </div>

        </form>

    </div>

    <hr>

    <div class="instructions">

        <p class="lead">Do what now?</p>
        <ol>
            <li>Type in your required widths, comma separated.
                <ul>
                    <li>
                        <small>
                            Leave the 'Responsive" checkbox selected to resize by widths maintaining aspect ratio.
                        </small>
                    </li>
                    <li>
                        <small>Deselect the responsive box to get square images if no height given.</small>
                    </li>
                    <li>
                        <small>
                            To resize width AND height put your sizes like 150x100, 800x600 etc. Images will still
                            constrain aspect ratios to prevent squishing but will best-fit-crop to those dimensions
                        </small>
                    </li>
                </ul>
            </li>
            <li>Drag all the images (5MB max per image) you want to be resized into the big box. (Or click in
                the box and select your images in the browser)
            </li>
            <li>Wait for all your images to upload. Once the upload is complete you will receive a .zip file
                containing all your resized images.
            </li>
        </ol>
    </div>
@endsection