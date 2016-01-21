<div class="hidden">
    <form id="feedback-form" action="{{ route('feedback') }}" method="post">
        {!! csrf_field() !!}
        <div class="form-group">
            <label for="feedback">Feedback:</label>
            <textarea name="feedback" id="feedback" class="form-control">{{ old('body') }}</textarea>
        </div>
        <div class="form-group">
            <button class="btn btn-primary form-control">Send Feedback</button>
        </div>
    </form>
</div>
<div class="container">
    <div class="form-group">
        <button class="feedback-tab btn btn-primary form-control" onclick="showFeedbackForm()">Feedback</button>
    </div>
</div>