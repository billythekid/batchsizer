@extends('layouts.app')
@section('title', "Resizing Examples")
@section('content')
    <div class="panel panel-info">
        <div class="panel-heading">Resizing examples</div>
        <div class="panel-body">
            <p>Here you can see how a number of images have been resized using various settings in the paid version of
                the resizer.</p>
            <p>All these examples can be achieved on any of the plans.</p>

            <p>Here are the original files used to create all the results shown below. Click the thumbnails for the
                full-size images.</p>
            <p>You can download a zip file of these images here: <a class="btn btn-info btn-xs"
                        href="{{ url('images/examples/originals/originals.zip') }}"><i class="fa fa-download"></i> <i class="fa fa-file-archive-o"></i></a></p>
            @foreach($originals as $original)
                <div class="col-xs-4 col-md-2">
                    <a target="_blank" href="{{ url('images'.$original['file']) }}">
                        <img src="{{ url('images'.$original['thumb']) }}" alt="Example" class="img-thumbnail">
                    </a>
                    <table class="table table-striped table-condensed examples">
                        <tr>
                            <th><i class="fa fa-arrows-h"></i></th>
                            <td>{{ $original['width'] }}px</td>
                        </tr>
                        <tr>
                            <th><i class="fa fa-arrows-v"></i></th>
                            <td>{{ $original['height'] }}px</td>
                        </tr>
                        <tr>
                            <th><i class="fa fa-balance-scale"></i></th>
                            <td class="clipping">{{ formatFileSize($original['filesize']) }}</td>
                        </tr>
                        <tr>
                            <th><i class="fa fa-camera-retro"></i></th>
                            <td class="clipping"><a target="_blank"
                                                    href="{{ $original['link']??'' }}">{{ $original['photographer']??'' }}</a>
                            </td>
                        </tr>
                    </table>
                </div>
            @endforeach
        </div>
    </div>

    @foreach(range(0,11) as $index)
    <div class="panel panel-info">
        <div class="panel-body">

        </div>
    </div>
    @endforeach

@endsection