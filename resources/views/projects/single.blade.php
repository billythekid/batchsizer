@extends('layouts.app')
@section('title', "")
@section('content')
{{ $project }}
    @include('projects.ownerTools')
@endsection