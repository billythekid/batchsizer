<div class="panel panel-default">
    <div class="panel-heading">Add Common Sizes <i class="pull-right fa fa-expand maximise-toggle"></i></div>
    <div class="panel-body hidden">

        <select id="common-sizes">
            <option value="">Select a size</option>
            @foreach($commonSizes as $size)
                <option value="{{ $size->width }}x{{ $size->height }}">{{ $size->description }}</option>
            @endforeach
        </select>
        <br>
        <small>Paper sizes from <a target="_blank" href="http://www.papersizes.org/a-sizes-in-pixels.htm">papersizes.org</a></small>
    </div>
</div>
