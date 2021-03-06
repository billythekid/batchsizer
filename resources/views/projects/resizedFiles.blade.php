<div class="panel panel-info">
    <div class="panel-heading">Resized Batches <i class="pull-right fa fa-compress minimise-toggle"></i></div>
    <div class="panel-body text-center">
        <div id="resized-project-files">
            @foreach($resizedZips as $file)
                <?php
                $params = explode('/', $file);
                $filename = end($params);
                ?>
                <div class="col-xs-4 col-sm-3 col-md-2 {{ str_slug($filename) }}">
                    <i class="img-thumbnail icon-{{ str_slug($filename) }} fa-5x fa fa-file-archive-o"></i>
                    <br>

                    @if($project->owner->plan == 'project')
                        <p class="zipname">
                            {{ $filename }}
                        </p>
                    @else
                        <p></p>
                        <form action="{{ route('renameProjectFile', $project) }}" method="post">
                            {!! csrf_field() !!}
                            <input type="hidden" name="type" value="resized">
                            <input type="hidden" name="oldfilename" value="{{ $filename }}">
                            <input type="text" class="form-control" name="file" value="{{ $filename }}">
                            <button class="btn btn-success btn-sm btn-block fa fa-pencil"><span
                                        class="hidden-xs">Rename</span></button>
                        </form>
                        @endif
                        </p>
                        <form action="{{ route('downloadProjectFile', $project) }}" method="post">
                            {!! csrf_field() !!}
                            <input type="hidden" name="type" value="resized">
                            <input type="hidden" name="file" value="{{ $filename }}">
                            <button class="btn btn-success btn-sm btn-block fa fa-download"><span class="hidden-xs">Download</span>
                            </button>
                        </form>
                        <form action="{{ route('deleteFile', $project) }}" method="post">
                            {!! csrf_field() !!}
                            {!! method_field('delete') !!}
                            <input type="hidden" name="type" value="resized">
                            <input type="hidden" name="file" value="{{ $filename }}">
                            <button class="btn btn-danger btn-xs btn-block fa fa-trash"><span
                                        class="hidden-xs">Delete</span></button>
                        </form>
                        <div class="clearfix"></div>
                </div>
            @endforeach
        </div>
    </div>
</div>
