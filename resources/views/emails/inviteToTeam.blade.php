<p>You have been invited by {{ $invite->team->owner->name }} to join their {{ $invite->team->name }} team.</p>
<p>
    To accept this invitation please <a href="{{ route('handleInvite',$invite->accept_token) }}">follow this link</a> or
    copy and paste this URL into your browser:
</p>
<pre>{{ route('handleInvite',$invite->accept_token) }}</pre>

<p>
    If you do not wish to join this team, please reject the invitation by <a
            href="{{ route('handleInvite',$invite->deny_token) }}">following this link</a> or pasting this URL into your
    browser:</p>
<pre>{{ route('handleInvite',$invite->deny_token) }}</pre>
<p>
    Thanks for your time,<br>
    BatchSizer
</p>