<div class="panel panel-info">
    <div class="panel-heading">Uploaded Project Files <i class="pull-right fa fa-compress minimise-toggle"></i></div>
    <div class="panel-body">
        <div id="uploaded-project-files">
            @foreach($uploadedFiles as $file)
                <?php $params = explode('/', $file); ?>
                @if(ends_with($file,'.zip'))
                    <div class="col-xs-4 col-sm-3 col-md-2 {{ str_slug($params[3]) }}">
                        <i class="img-thumbnail icon-{{ str_slug($params[3]) }} fa-5x fa fa-file-archive-o"></i>
                        <p class="zipname">
                            {{ $params[3] }}
                        </p>
                        <div class="clearfix"></div>
                    </div>
                @else
                    @if(!str_contains($file,"/btk-tn-"))
                        <div class="col-xs-4 col-sm-3 col-md-2 btk-tn-{{ str_slug($params[3]) }}">
                            <i class="icon-btk-tn-{{ str_slug($params[3]) }} fa-5x fa fa-circle-o-notch fa-spin"></i>
                            <p> </p>
                            <div class="clearfix"></div>
                        </div>
                    @endif
                @endif
            @endforeach
        </div>
    </div>
</div>
