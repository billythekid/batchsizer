@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12"><!--<div class="title">{{ config('app.name') }}</div>-->
                <form action="{{ route('batchsizer') }}" id="filezone" class="dropzone btkzone">
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

        <hr class="invisible">

        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-info">
                    <div class="panel-heading">Do what now?</div>

                    <div class="panel-body">
                        <ol>
                            <li>Type in your required widths, comma separated.
                                <ul>
                                    <li>
                                        <small>
                                            Leave the 'Responsive" checkbox selected to resize by widths maintaining
                                            aspect ratio.
                                        </small>
                                    </li>
                                    <li>
                                        <small>Deselect the responsive box to get square images if no height given.
                                        </small>
                                    </li>
                                    <li>
                                        <small>
                                            To resize width AND height put your sizes like 150x100, 800x600 etc. Images
                                            will still
                                            constrain aspect ratios to prevent squishing but will best-fit-crop to those
                                            dimensions
                                        </small>
                                    </li>
                                    <li>
                                        <small>
                                            If you want images smaller than the dimensions you put in to be scaled up,
                                            deselect the
                                            upscale checkbox. (Up-scaled images can appear of visibly lower quality)
                                        </small>
                                    </li>
                                </ul>
                            </li>
                            <li>Drag all the images (10MB max per image, 10 images max) you want to be resized into the
                                big box. (Or
                                click
                                in
                                the box and select your images in the browser)
                            </li>
                            <li>Wait for all your images to upload. Once the upload is complete you will receive a .zip
                                file
                                containing all your resized images.
                            </li>
                        </ol>
                        <p>For more information, please read <a href="{{route('about')}}">our about page</a>.</p></div>
                </div>
            </div>
        </div>

        {{--
        <div class="plans">
            @include('_includes.plans')
        </div>
        --}}
        @include('_includes.progress')

        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-info">
                    <div class="panel-heading">Login</div>
                    <div class="panel-body">
                        @include('_includes.loginForm')
                    </div>
                </div>
            </div>

            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-info">
                    <div class="panel-heading">Not yet registered?</div>
                    <div class="panel-body">
                        <p>Our accounts give a number of additional benefits and functionality.</p>
                        @include('_includes.plans')</div>
                </div>
            </div>
        </div>
    </div>
@endsection