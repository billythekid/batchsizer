<div class="col-md-4 plan coming-soon">
    <div class="panel panel-success">
        <div class="panel-heading">Agency Account <span class="price btn-success"><strong>$25</strong>/month</span>
        </div>
        <div class="panel-body">
            <p>Unlimited Projects</p>
            <ul>
                <li>Save uploads on a per-project basis</li>
                <li>Rename and save your resized zip files for downloading later</li>
            </ul>
            <p>More image options</p>
            <ul>
                <li>Adjust the quality of your images</li>
                <li>Get black &amp; white images</li>
                <li>Adjust the red green and blue values for your images</li>
                <li>Pixelate or blur images</li>
                <li>Increased image upload limits (25 images at a time)</li>
            </ul>

            <p>Email Resizing</p>
            <ul>
                <li>Send your images in an email and we'll email your zip right back!</li>
            </ul>

            <p>Zip Uploads</p>
            <ul>
                <li>Drag a zip file containing all your images instead!</li>
            </ul>
            <p>Team members</p>
            <ul>
                <li>Invite users to your team</li>
                <li>Assign projects on a per-team basis</li>
            </ul>
            @if(Auth::guest())
                <hr>
                {{--
                    <a href="{{ route('signup','agency') }}" class="btn btn-block btn-primary">Get Agency Account</a>
                --}}
                <button disabled class="btn btn-block btn-primary">Get Agency Account</button>
            @endif
        </div>
    </div>
</div>
