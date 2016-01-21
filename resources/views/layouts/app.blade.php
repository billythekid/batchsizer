<!DOCTYPE html>
<html>
<head>
    <title>BatchSizer (beta)</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="Batch resize your images for use in a responsive web design.">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900">
    <link rel="stylesheet" href="{{ url('css/app.css') }}">
    <link rel="stylesheet" href="{{ url('css/all.css') }}">
</head>
<body>
@include('_includes.nav')

<div class="container">
    @yield('content')

    @include('_includes/feedback')
</div>


<script src="https://js.pusher.com/3.0/pusher.min.js"></script>
<script src="{{ url('js/all.js') }}"></script>
@if(!empty($channel))
    <script>
        (function () {
            var pusher = new Pusher('7389add2f9bff1eb4e00', {
                encrypted: true
            });
            var channel = pusher.subscribe('{{ $channel }}');
            channel.bind('App\\Events\\FileBeingProcessed', function (data) {
                var bar = document.getElementById('progress-bar');
                var pc = data.percentage + "%";
                bar.style.width = pc;
                bar.innerText = pc;
                if (pc == "100%") {
                    setTimeout(function () {
                        bar.innerText = 'Complete!';
                    }, 500);
                    setTimeout(function () {
                        bar.innerText = "0%"
                        bar.style.width = "0%";
                    }, 2000)
                }
            });
        })()
    </script>
@endif

@include('_includes.alerts')
@include('_includes.googleAnalytics')
</body>
</html>