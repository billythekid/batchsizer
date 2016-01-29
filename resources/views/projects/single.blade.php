@extends('layouts.app')
@section('title', "")
@section('content')
    @include('projects.ownerTools')
    @include('projects.emailAddress')
    @include('projects.uploader')
@endsection

@section('scripts')
    <script>
        $('#account-zone').dropzone({
            dictDefaultMessage: "Drop zips or images from your device here",
            paramName: "file",
            maxFilesize: 10,
            uploadMultiple: true,
            maxFiles: 50,
            parallelUploads: 50,
            addRemoveLinks: true,
            acceptedFiles: 'image/*,.zip',
            init: function () {
                this.on("successmultiple", function (file, response) {
                    this.removeAllFiles();
                    //console.log(response);
                    @if($project->save_uploads)
                        $(".dz-message").html("Thanks. Your images will show below when saved to our secure server.<br>Drop zips or images from your device here")
                    @endif
                });
                this.on("drop", function (file) {
                    document.getElementsByClassName("progress")[0].classList.remove('hidden');
                });
            }
        });
    </script>

    <script>
        @foreach(Storage::files("projects/{$project->id}") as $file)
        <?php $params = explode('/',$file); ?>
            @if(ends_with($file,'.zip'))
                $('#uploaded-project-files').append('<div class="col-xs-4 col-sm-3 col-md-2{{ str_slug($params[2]) }}"><i class="img-thumbnail icon-{{ str_slug($params[2]) }} fa-5x fa fa-file-archive-o"></i><br>{{ $params[2] }}</div>');
            @else
                @if(str_contains($file,"/btk-tn-"))
                    $('#uploaded-project-files').append('<div class="col-xs-4 col-sm-3 col-md-2{{ str_slug($params[2]) }}"><i class="icon-{{ str_slug($params[2]) }} fa-5x fa fa-circle-o-notch fa-spin"></i></div>')
                    $.get('{{ route('getUploadedFile', ['directory'=>$params[0],'project'=>$params[1],'filename'=>$params[2]]) }}')
                        .success(function (data) {
                            $('#uploaded-project-files .icon-{{ str_slug($params[2]) }}')
                                .after('<img class="{{ str_slug($params[2]) }} img-thumbnail" src="' + data + '" alt="{{ $params[2] }}">')
                                .remove();
                        });
                @endif
            @endif
        @endforeach
    </script>

@endsection