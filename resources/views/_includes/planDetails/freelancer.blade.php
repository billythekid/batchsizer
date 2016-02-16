<div class="col-md-4 plan">
    <div class="panel panel-warning">
        <div class="panel-heading">Freelancer Account <span
                    class="price btn-warning"><strong>£5</strong>/month</span></div>
        <div class="panel-body">
            <p>Five Projects</p>
            <ul>
                <li>Save uploads on a per-project basis</li>
                <li>Rename and save your zip files for downloading later</li>
            </ul>
            <p>More image options</p>
            <ul>
                <li>Adjust the quality of your images</li>
                <li>Get black &amp; white images</li>
                <li>Adjust the red green and blue values for your images</li>
                <li>Pixelate images</li>
                <li>Increased image upload limits (25 images at a time)</li>
            </ul>
            <p>Zip Uploads</p>
            <ul>
                <li>Drag a zip file containing all your images instead!</li>
            </ul>
            {{--
            <p>Email Resizing</p>
            <ul>
                <li>Send your images in an email and we'll email your zip right back!</li>
            </ul>
            --}}
            @if(Auth::guest())
                <hr>
                <a href="{{ route('signup','freelancer') }}" class="btn btn-block btn-primary">Get Freelancer
                    Account</a>
                {{--
                <button disabled class="btn btn-block btn-primary">Get Freelancer Account</button>
                --}}
            @endif
        </div>
    </div>
</div>
