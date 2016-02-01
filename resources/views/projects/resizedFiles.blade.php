<div class="panel panel-info">
    <div class="panel-heading">Resized Batches <i class="pull-right fa fa-compress minimise-toggle"></i></div>
    <div class="panel-body">
        <div id="resized-project-files">
            @foreach($resizedZips as $file)
                <?php $params = explode('/', $file); ?>
                <div class="col-xs-4 col-sm-3 col-md-2 {{ str_slug($params[3]) }}">
                    <i class="img-thumbnail icon-{{ str_slug($params[3]) }} fa-5x fa fa-file-archive-o"></i>
                    <br>
                    <p>
                        {{ $params[3] }}
                    </p>
                    <div class="clearfix"></div>
                </div>
            @endforeach
        </div>
    </div>
</div>
