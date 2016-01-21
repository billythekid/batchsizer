<nav class="navbar bg-info panel-info">
    <div class="container">
        <div class="navbar-header">

            <button type="button" class="active text-danger btn btn-info navbar-btn navbar-toggle collapsed "
                    data-toggle="collapse"
                    data-target="#app-navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="fa fa-bars"></span>
            </button>

            <!-- Branding Image -->
            <a class="navbar-brand" href="{{ url('/') }}">
                {{ config('app.name') }}
            </a>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            {{--

             <ul class="nav navbar-nav">
                 <li><a href="{{ url('/home') }}">Home</a></li>
             </ul>
            --}}

            <ul class="nav navbar-nav navbar-right">

                    @if (Auth::guest())
                        @if (app()->environment('local'))
                            <li><a href="{{ url('/login') }}">Login</a></li>
                        @endif
                    @else
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu" role="menu">
                                <li><a href="{{ url('/logout') }}"><i class="fa fa-btn fa-sign-out"></i>Logout</a></li>
                            </ul>
                        </li>
                    @endif
                    <li>
                        <button class="btn btn-info navbar-btn" onclick="showFeedbackForm()">Feedback</button>
                    </li>

            </ul>
        </div>
    </div>
</nav>