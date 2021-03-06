<div class="panel panel-info">
    <div class="panel-heading">Uploaded Project Files <i class="pull-right fa fa-compress minimise-toggle"></i></div>
    <div class="panel-body text-center">
        <div id="uploaded-project-files">
            @foreach($uploadedFiles as $file)
                <?php
                $params = explode('/', $file);
                $filename = end($params);
                ?>
                @if(ends_with($file,'.zip'))
                    <div class="col-xs-4 col-sm-3 col-md-2 {{ str_slug($filename) }}">
                        <i class="img-thumbnail icon-{{ str_slug($filename) }} fa-4x fa fa-file-archive-o"></i>
                        <p class="zipname">
                            {{ $filename }}
                        </p>
                        <form action="{{ route('downloadProjectFile', $project) }}" method="post">
                            {!! csrf_field() !!}
                            <input type="hidden" name="type" value="upload">
                            <input type="hidden" name="file" value="{{ $filename }}">
                            <button class="btn btn-success btn-sm btn-block fa fa-download"> <span class="hidden-xs">Download</span>
                            </button>
                        </form>
                        <form action="{{ route('deleteFile', $project) }}" method="post">
                            {!! csrf_field() !!}
                            {!! method_field('delete') !!}
                            <input type="hidden" name="type" value="upload">
                            <input type="hidden" name="file" value="{{ $filename }}">
                            <button class="btn btn-danger btn-xs btn-block fa fa-trash"> <span
                                        class="hidden-xs">Delete</span></button>
                        </form>
                    </div>
                @else
                    @if(!str_contains($file,"/btk-tn-"))
                        <div class="col-xs-4 col-sm-3 col-md-2 btk-tn-{{ str_slug($filename) }} text-center">
                            <i class="icon-btk-tn-{{ str_slug($filename) }} fa-5x fa fa-circle-o-notch fa-spin"></i>

                            <form action="{{ route('downloadProjectFile', $project) }}" method="post">
                                {!! csrf_field() !!}
                                <input type="hidden" name="type" value="upload">
                                <input type="hidden" name="file" value="{{ $filename }}">
                                <button class="btn btn-success btn-sm btn-block fa fa-download"> <span class="hidden-xs">Download</span>
                                </button>
                            </form>
                            <form action="{{ route('deleteFile', $project) }}" method="post">
                                {!! csrf_field() !!}
                                {!! method_field('delete') !!}
                                <input type="hidden" name="type" value="upload">
                                <input type="hidden" name="file" value="{{ $filename }}">
                                <input type="hidden" name="tn" value="btk-tn-{{ $filename }}">
                                <button class="btn btn-danger btn-xs btn-block fa fa-trash"> <span class="hidden-xs">Delete</span>
                                </button>
                            </form>
                            <hr class="invisible">
                        </div>
                    @endif
                @endif
            @endforeach
        </div>
    </div>
</div>
