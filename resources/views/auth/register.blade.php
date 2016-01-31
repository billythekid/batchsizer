@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-info">
                    <div class="panel-heading">Register - {{ $plan }}</div>
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST"
                              action="{{ route('register', strtolower($plan)) }}">
                            {!! csrf_field() !!}

                            <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                <label class="col-md-4 control-label">Name</label>

                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="name" value="{{ old('name') }}"
                                           required>

                                    @if ($errors->has('name'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                <label class="col-md-4 control-label">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input type="email" class="form-control" name="email" value="{{ old('email') }}"
                                           required>

                                    @if ($errors->has('email'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                <label class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input type="password" class="form-control" name="password" required>

                                    @if ($errors->has('password'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                                <label class="col-md-4 control-label">Confirm Password</label>

                                <div class="col-md-6">
                                    <input type="password" class="form-control" name="password_confirmation" required>

                                    @if ($errors->has('password_confirmation'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>
                            <span class="payment-errors"></span>


                            <div class="form-group">
                                <label class="col-md-4 control-label">Card Number:</label>
                                <div class="col-md-6">
                                    <div class="input-group">
                                        <input type="tel" size="20" data-stripe="number" id="number"
                                               class="form-control">
                                        <div class="card input-group-addon"><i class="fa fa-cc-stripe"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label">CVC: </label>
                                <div class="col-md-2">
                                    <input type="tel" size="4" data-stripe="cvc" class="form-control"/>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label">Expiration (MM/YYYY):</label>
                                <div class="col-md-3">
                                    <div class="input-group">
                                        <input type="tel" size="2" data-stripe="exp-month" class="form-control"/>
                                        <div class="input-group-addon">/</div>
                                        <input type="tel" size="4" data-stripe="exp-year" class="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fa fa-btn fa-user"></i> Register - {{ $plan }}
                                    </button>
                                    <label>
                                        Payments are securely handled by <a href="https://stripe.com">Stripe</a>.<br>
                                        Your card details don't hit our server.
                                    </label>
                                </div>
                            </div>
                            {{--
                            <script
                                    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                                    data-key="{{ env('STRIPE_KEY') }}"
                                    data-amount="{{ $price['amount'] }}"
                                    data-name="{{ $plan }}"
                                    data-description="{{ $plan }} Subscription ({{ $price['human'] }})"
                                    data-locale="auto">
                            </script>
                            --}}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        $('#number').payment('formatCardNumber');
    </script>
    <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
    <script type="text/javascript">
        Stripe.setPublishableKey("{{ env('STRIPE_KEY') }}");
        var stripeResponseHandler = function(status, response) {
            var $form = $('form');
            if (response.error) {
                // Show the errors on the form
                $form.find('.payment-errors').text(response.error.message);
                $form.find('button').prop('disabled', false);
            } else {
                // token contains id, last4, and card type
                var token = response.id;
                // Insert the token into the form so it gets submitted to the server
                $form.append($('<input type="hidden" name="stripeToken" />').val(token));
                // and re-submit
                $form.get(0).submit();
            }
        };
        jQuery(function($) {
            $('form').submit(function(event) {
                var $form = $(this);
                $form.find('button').prop('disabled', true);
                Stripe.card.createToken($form, stripeResponseHandler);
                return false;
            });
        });
    </script>
@endsection