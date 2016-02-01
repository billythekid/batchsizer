<div class="col-md-4 plan">
    <div class="panel panel-danger">
        <div class="panel-heading">Project Access <span
                    class="price btn-danger"><strong>$5</strong>/project</span></div>
        <div class="panel-body">
            <p>No re-billing, just a one-off fee</p>
            <ul>
                <li>Save uploads</li>
                <li>Save your resized zips files for downloading later</li>
            </ul>
            <p>More image options</p>
            <ul>
                <li>Adjust the quality of your images</li>
                <li>Get black &amp; white images</li>
                <li>Adjust the red green and blue values for your images</li>
                <li>Pixelate images</li>
                <li>Increased image upload limits (25 images at a time)</li>
            </ul>
            @if(Auth::guest())
                <hr>
                <a href="{{ route('signup','project') }}" class="btn btn-block btn-primary">Get Project Access</a>
                {{--
                    <button disabled class="btn btn-block btn-primary">Get Project Access</button>
                --}}
            @endif
        </div>
    </div>
</div>
