@extends('layouts.app')
@section('title', "")
@section('content')
    @include('projects.ownerTools')
    @include('projects.emailAddress')
    @include('projects.uploader')
    @include('projects.resizedFiles')
@endsection

@section('scripts')
    <script>
        $('#account-zone').dropzone({
            dictDefaultMessage: "Drop zips or images from your device here",
            paramName: "file",
            maxFilesize: 10,
            uploadMultiple: true,
            maxFiles: 25,
            parallelUploads: 25,
            addRemoveLinks: true,
            acceptedFiles: 'image/*,.zip',
            init: function () {
                this.on("successmultiple", function (file, response) {
                    this.removeAllFiles();
                    @if($project->save_uploads)
                        $(".dz-message").html("Thanks. Your images will show below when saved to our secure server.<br>Drop zips or images from your device here")
                    @endif
                    if (response.url)
                    {
                        window.location = response.url;
                    }
                });
                this.on("drop", function (file) {
                    document.getElementsByClassName("progress")[0].classList.remove('hidden');
                });
            }
        });
    </script>

    <script>
        $("#red,#green,#blue").slider({
            reversed : true,
            tooltip: 'always'
        });
    </script>

    <script>
        @foreach(Storage::files("projects/{$project->id}/uploads") as $file)
        <?php $params = explode('/',$file); ?>
            @if(ends_with($file,'.zip'))
                $('#uploaded-project-files').append('<div class="col-xs-4 col-sm-3 col-md-2 {{ str_slug($params[3]) }}"><i class="img-thumbnail icon-{{ str_slug($params[3]) }} fa-5x fa fa-file-archive-o"></i><br>{{ $params[3] }}</div>');
        @else
            @if(str_contains($file,"/btk-tn-"))
                $('#uploaded-project-files').append('<div class="col-xs-4 col-sm-3 col-md-2 {{ str_slug($params[3]) }}"><i class="icon-{{ str_slug($params[3]) }} fa-5x fa fa-circle-o-notch fa-spin"></i><br>{{ str_replace('btk-tn-','',$params[3]) }}</div>')
        $.get('{{ route('getUploadedFile', ['directory'=>$params[0],'project'=>$params[1],'filename'=>$params[3]]) }}')
                .success(function (data) {
                    $('#uploaded-project-files .icon-{{ str_slug($params[3]) }}')
                            .after('<img class="{{ str_slug($params[3]) }} img-thumbnail" src="' + data + '" alt="{{ $params[3] }}">')
                            .remove();
                });
        @endif
        @endif
        @endforeach
        @foreach(Storage::files("projects/{$project->id}/resized") as $file)
        <?php $params = explode('/',$file); ?>
                $('#resized-project-files').append('<div class="col-xs-4 col-sm-3 col-md-2 {{ str_slug($params[3]) }}"><i class="img-thumbnail icon-{{ str_slug($params[3]) }} fa-5x fa fa-file-archive-o"></i><br>{{ $params[3] }}</div>');
        @endforeach
    </script>

    <script>
        $('#download').change(function () {
            var target = $('.progress');
            this.checked ? target.show() : target.hide();
        });
    </script>

@endsection