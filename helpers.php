<?php
function formatFileSize($size)
{
    $units = array(' B', ' KB', ' MB', ' GB', ' TB');
    for ($i = 0; $size > 1024; $i++) { $size /= 1024; }
    return round($size, 2).$units[$i];
}

function sort_by_file_width($a, $b)
{
    $apath = $a->getRealPath();
    $aimg = getimagesize($apath);
    $bpath = $b->getRealPath();
    $bimg = getimagesize($bpath);
    return $aimg[0] > $bimg[0];
}