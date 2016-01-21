var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.copy('vendor/fortawesome/font-awesome/fonts', 'public/fonts')
        //.copy('resources/assets/sass/bootstrap-sass/assets/fonts/bootstrap', 'public/fonts')
        //.copy('node_modules/bootstrap-sass','resources/assets/sass/bootstrap-sass') // uncomment to overwrite changes.
        .sass('app.scss')
        .styles(['sweetalert.css', 'dropzone.css', 'app.css'])
        .scripts(['jquery.min.js', 'bootstrap.min.js', 'sweetalert.js', 'dropzone.js', 'app.js']);
});
