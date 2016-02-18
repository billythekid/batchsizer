@if($project->owner->plan == 'agency')
    <div class="panel panel-info">
        <div class="panel-heading">Email Uploading  <i class="pull-right fa fa-compress minimise-toggle"></i></div>
        <div class="panel-body">
            <div class="col-md-6">
                <form id='email-uploader-refresh-form' action="{{route('refreshEmailUploadAddress',$project)}}"
                      method="post">
                    {!! csrf_field() !!}

                    <div class="form-group">
                        <label for="email">Your unique email address for this project:</label>
                        <div class="input-group">

                            <input type="text" id="email-uploader-refresh-address" class="form-control"
                                   value="{{ Auth::user()->emailUploadAddress($project)->email }}"
                                   placeholder="Email" disabled>
                            <span class="input-group-btn"><button id="email-uploader-refresh-button"
                                                                  class="btn btn-default"><i class="fa fa-refresh"></i>
                                </button></span>

                        </div>
                    </div>
                </form>

            </div>

            <div class="col-md-6">
                <p>Email resizing is deliberately simplified. Send your images as attachments to the address shown and
                    we'll resize them using the following settings:</p>
                <ul>
                    <li>Responsive (widths only are used)</li>
                    <li>Quality: 90%</li>
                    <li>No Upscaling</li>
                </ul>
            </div>

            <div class="col-md-12">
                <p>To use email resizing send an email to the address above. </p>
                <ul>
                    <li>Set the subject line to the widths you want back, just like you would in the uploader box. (
                        <code>200, 300, 400, 1024, 769</code> etc.)
                    </li>
                    <li>If you want greyscale images, put the word <code>grey</code> (or <code>gray</code> if you
                        prefer!) in the subject line, before or after your sizes.
                    </li>
                    <li>
                        Attach your images, either in a zip (recommended) or individually. Hit send!
                    </li>
                </ul>
                <p>We'll email your resized images back to you!</p>
            </div>

        </div>
    </div>
@endif
