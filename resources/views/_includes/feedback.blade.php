<div class="hidden">
    <form id="feedback-form" action="{{ route('feedback') }}" method="post">
        {!! csrf_field() !!}
        <input type="hidden" id="recaptcha-token" name="g-recaptcha-response">
        <div class="form-group">
            <label for="feedback">Feedback:</label>
            <textarea name="feedback" id="feedback" class="form-control"></textarea>
        </div>
        <div class="form-group">
            <button class="btn btn-primary form-control">Send Feedback</button>
        </div>
    </form>
</div>