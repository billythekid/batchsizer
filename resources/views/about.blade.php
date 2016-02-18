@extends('layouts.app')
@section('title', "")
@section('content')

    <div class="content col-xs-10 col-xs-offset-1">
        <div class="title">About</div>
    </div>
    <div class="col-xs-10 col-xs-offset-1">
        <p class="question">Who uses this?</p>
        <p>This tool was created for web designers however anyone who needs one or more images resized will
            find it useful.</p>

        <p class="question">What can it be used for?</p>
        <p>Any number of reasons really, here are some examples.</p>
        <ul>
            <li>
                You need a number of banner images resized to different widths for your responsive web layout.
            </li>
            <li>
                You need to quickly resize a batch of images but can't be bothered opening photoshop.
            </li>
            <li>
                You need a new avatar for a forum to be specific dimensions.
            </li>
            <li>
                You want to make a load of square thumbnails.
            </li>
        </ul>

        <p class="question">Does this tool store my images?</p>
        <p><strong>We do not store your images</strong>. This is part of why this works so quickly.
            Your images are only on the server for as long as it takes to process them. We don't need to write them to
            the filesystem, indeed the new resized images go straight from RAM into the zip. The zip file created is
            only on our server until you finish downloading it. If for some reason you didn't download your zip file we
            have an automated process that removes these zips twice a day.</p>
        <p>Paid accounts <strong>have the option</strong> to retain their uploaded images and zip files.</p>

        <p class="question">How much does it cost?</p>
        <p>Paid user accounts allow additional functionality to customers. To see some examples of the image
            manipulation that can be achieved with an account, check out our <a href="{{ route('examples') }}">examples
                page <i class="fa fa-link"></i></a></p>
        <p>We currently have 3 tiers for paid accounts.</p>
        @include('_includes.plans')


    </div>

@endsection