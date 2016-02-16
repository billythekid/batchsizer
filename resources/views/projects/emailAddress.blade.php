@if($project->owner->plan == 'agency')
    <div class="panel panel-info">
        <div class="panel-heading">Email Uploading</div>
        <div class="panel-body">
            <div class="col-md-6">
                <form id='email-uploader-refresh-form' action="{{route('refreshEmailUploadAddress',$project)}}" method="post">
                    {!! csrf_field() !!}

                    <div class="form-group">
                        <label for="email">Your unique email address for this project:</label>
                        <div class="input-group">

                            <input type="text" id="email-uploader-refresh-address" class="form-control"
                                   value="{{ Auth::user()->emailUploadAddress($project)->email }}"
                                   placeholder="Email" disabled>
                            <span class="input-group-btn"><button id="email-uploader-refresh-button" class="btn btn-default"><i class="fa fa-refresh"></i>
                                </button></span>

                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
@endif
