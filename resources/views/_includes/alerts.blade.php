@if (session()->has('flash_message'))
    <script>
        swal({
            title: "{!! session('flash_message.title') !!}",
            text: "{!! session('flash_message.message') !!}",
            type: "{{ session('flash_message.type') }}",
            timer: 2000,
            showConfirmButton: false
        });
    </script>
@endif

@if (session()->has('flash_message_overlay'))
    <script>
        swal({
            title: "{{ addcslashes(session('flash_message_overlay.title'),'"') }}",
            text: "{{ addcslashes(session('flash_message_overlay.message'),'"') }}",
            type: "{{ addcslashes(session('flash_message_overlay.type'),'"') }}",
            confirmButtonText: 'Ok'
        });
    </script>
@endif