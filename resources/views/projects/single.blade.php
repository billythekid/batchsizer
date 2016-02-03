@extends('layouts.app')
@section('title', "")
@section('content')
    @include('projects.ownerTools')
    @include('projects.emailAddress')
    @include('projects.uploader')
    @include('projects.uploadedFiles')
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
                    if (response.status == 'success') {
                        @if($project->save_uploads)
                            $(".dz-message").html("Thanks. Your images will show below when saved to our secure server.<br>Drop zips or images from your device here")
                        @endif
                        if (response.url) {
                            $('#ajax-download').attr('src',response.url);
                        }
                    } else if (response.status == 'error') {
                        swal({
                            title: "Error",
                            text: response.message,
                            type: "error",
                            confirmButtonText: 'Ok'
                        });
                    }
                });
                this.on("drop", function (file) {
                    document.getElementsByClassName("progress")[0].classList.remove('hidden');
                });
            }
        });
    </script>

    <script>
        function bgrgb() {
            var r = (parseInt($("#red").val()) + 100) / 2;
            var g = (parseInt($("#green").val()) + 100) / 2;
            var b = (parseInt($("#blue").val()) + 100) / 2;
            var col = 'rgb(' + r + '%,' + g + '%,' + b + '%)';
            $('#colourizehint').css('backgroundColor', col);
        }
        $("#red").slider({
            reversed: true,
            tooltip_position: 'left'
        }).on('slide', bgrgb);
        $("#green").slider({
            reversed: true
        }).on('slide', bgrgb);
        $("#blue").slider({
            reversed: true,
            tooltip_position: 'right'
        }).on('slide', bgrgb);
        $("#quality,#blur").slider();
        /*
         .on('slide', function () {
         $('#colourizehint').css('box-shadow', '0 0 ' + $(this).val() + 'px black inset');
         });
         */
    </script>

    <script>
        @foreach($thumbnails as $thumbnail)
        $.get('{{ route('getUploadedImage', [$thumbnail['directory'],$thumbnail['project'],$thumbnail['filename']]) }}')
                .success(function (data) {
                    $('#uploaded-project-files .icon-{{ str_slug($thumbnail['filename']) }}')
                            .after('<img class="{{ str_slug($thumbnail['filename']) }} img-thumbnail" src="' + data + '" alt="{{ $thumbnail['filename'] }}">')
                            .remove();
                });
        @endforeach
    </script>

    <script>
        $('#download').change(function () {
            var target = $('.progress');
            this.checked ? target.show() : target.hide();
        });
    </script>
    <script>
        $('#common-sizes').change(function () {
            var val = $(this).val();
            if (val.length > 0) {
                var input = $('#dimensions');
                var dimensions = input.val().trim();
                while (dimensions.endsWith(",")) {
                    dimensions = dimensions.slice(0, -1).trim();
                }
                if (dimensions.length > 0) {
                    val = ', ' + val;
                }
                input.val(dimensions + val);
            }
        });
    </script>


@endsection