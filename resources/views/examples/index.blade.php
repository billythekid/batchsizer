@extends('layouts.app')
@section('title', "Resizing Examples")
@section('content')
    <div class="panel panel-info">
        <div class="panel-heading">Resizing examples</div>
        <div class="panel-body">
            <p>
                Here you can see how a number of images have been resized using various settings in the paid version of
                the resizer. All these examples can be achieved on any of the plans.
            </p>
            <p>
                Here are the original files used to create all the results shown below. Click the thumbnails for the
                full-size images. You can download a zip file of these images here:
                <a class="btn btn-info btn-xs" href="{{ url('images/examples/originals/originals.zip') }}">
                    <i class="fa fa-download"></i> <i class="fa fa-file-archive-o"></i>
                </a>
            </p>
            <p>
                Pay particular attention to the file sizes indicated with a <span class="glyphicon glyphicon-scale"></span> icon.
                These can be dramatically reduced by altering the quality setting with negligible visual impact,
                especially for web use. The first few panels below use the same settings with the exception of the
                quality setting. Also note "missing" files for the sizes given and compare their original size with the
                setting for preventing upscaling.
            </p>
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
                            <th><span class="glyphicon glyphicon-scale"></span></th>
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

    @foreach($examples as $example)
        <div class="panel panel-info">
            <div class="panel-heading">
                Download the zip file for the files with these settings here:
                <a class="btn btn-xs btn-info" target="_blank"
                   href="{{ url("images/examples/{$example['folder']}/{$example['zip']}") }}">
                    <i class="fa fa-download"></i> <i class="fa fa-file-archive-o"></i>
                </a>
                <span class="hidden">{{ $example['folder'] }}</span>
                <i class="pull-right fa fa-compress minimise-toggle"></i>
            </div>
            <div class="panel-body">
                <div class="col-xs-6 col-sm-4 col-md-3">

                    <h4>Settings Used</h4>
                    <table class="table table-striped table-condensed examples">
                        <tr>
                            <th>Sizes</th>
                            <td>{{ join(", ",$example['sizes']) }}</td>
                        </tr>
                        <tr>
                            <th>Quality</th>
                            <td>{{ $example['quality'] }}%</td>
                        </tr>
                        <tr>
                            <th>Responsive</th>
                            <td>
                                <i class="fa fa-toggle-{{ $example['responsive'] ? 'on text-success' : 'off text-danger' }}"></i>
                            </td>
                        </tr>
                        <tr>
                            <th>Prevent Upscaling</th>
                            <td>
                                <i class="fa fa-toggle-{{ $example['upscaling'] ? 'on text-success' : 'off text-danger' }}"></i>
                            </td>
                        </tr>
                        <tr>
                            <th>Preserve Aspect Ratio</th>
                            <td>
                                <i class="fa fa-toggle-{{ $example['ratio'] ? 'on text-success' : 'off text-danger' }}"></i>
                            </td>
                        </tr>
                        <tr>
                            <th>Greyscale</th>
                            <td>
                                <i class="fa fa-toggle-{{ $example['greyscale'] ? 'on text-success' : 'off text-danger' }}"></i>
                            </td>
                        </tr>
                        <tr>
                            <th>Red</th>
                            <td>{{ $example['red'] }}</td>
                        </tr>
                        <tr>
                            <th>Green</th>
                            <td>{{ $example['green'] }}</td>
                        </tr>
                        <tr>
                            <th>Blue</th>
                            <td>{{ $example['blue'] }}</td>
                        </tr>
                        <tr>
                            <th>Pixels</th>
                            <td>
                                {!! $example['pixels'] === 0 ? '<i class="fa fa-toggle-off text-danger"></i>' : strtoupper($example['pixels']) !!}
                            </td>
                        </tr>
                    </table>
                </div>
                <?php $currentWidth = $example['files'][0]->size[0]; ?>
                @foreach($example['files'] as $file)
                    @if ($file->size[0] != $currentWidth)
                        <?php $currentWidth = $file->size[0]; ?>
                        <div class="col-xs-12">
                            <hr>
                        </div>
                    @endif

                    <div class="col-xs-6 col-sm-4 col-md-3">
                        <a target="_blank"
                           href="{{ url("images/examples/{$example['folder']}/{$file->getBasename()}") }}">
                            <img class="img img-thumbnail"
                                 src="{{ url("images/examples/{$example['folder']}/tn-{$file->getBasename()}") }}"
                                 title="{{ $file->getBasename() }}" alt="{{ $file->getBasename() }}">
                        </a>
                        <table class="table table-condensed table-rows">
                            <tr>
                                <th><i class="fa fa-arrows-h"></i></th>
                                <td>{{ $file->size[0] }}px</td>
                            </tr>
                            <tr>
                                <th><i class="fa fa-arrows-v"></i></th>
                                <td>{{ $file->size[1] }}px</td>
                            </tr>
                            <tr>
                                <th><span class="glyphicon glyphicon-scale"></span></th>
                                <td class="clipping">{{ formatFileSize($file->getSize()) }}</td>
                            </tr>
                        </table>
                    </div>


                @endforeach
            </div>
        </div>
    @endforeach

@endsection