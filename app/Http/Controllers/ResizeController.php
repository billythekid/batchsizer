<?php

namespace App\Http\Controllers;

use App\Events\FileBeingProcessed;
use App\Http\Requests;
use Chumper\Zipper\Zipper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;


class ResizeController extends Controller
{
    private $actualTotalFiles;
    private $currentFile = 0;

    public function resize(Request $request)
    {
        $zipFileName = 'batches/' . time() . '.zip';
        $zipper = new Zipper;
        $zipper->make($zipFileName);

        $dimensions = explode(',', $request->input('dimensions'));
        $files = $request->files->all()['picture'];

        $files = array_slice($files, 0, 5);
        $totalFiles = count($files);
        $totalDimensions = count($dimensions);
        $totalDimensions = $totalDimensions > 0 ? $totalDimensions : 1;
        $this->actualTotalFiles = $totalFiles * $totalDimensions;

        foreach ($files as $file)
        {
            foreach ($dimensions as $dimension)
            {
                $this->doResizeAndAddToZip($request, $dimension, $file, $zipper);
            }
        }
        $zipper->close();

        return response()->json(['url' => str_replace('.zip', '', $zipFileName)]);
    }

    public function serveBatch($batch)
    {
        return response()->download("batches/{$batch}.zip", 'batchsizer.zip')->deleteFileAfterSend(true);
    }

    /**
     * @param Request $request
     * @param         $dimension
     * @param         $currentFile
     * @param         $actualTotalFiles
     * @param         $file
     * @param         $zipper
     */
    protected function doResizeAndAddToZip(Request $request, $dimension, $file, $zipper)
    {
        if ($request->has('responsive'))
        {
            $this->resizeResponsive($request, $dimension,   $file, $zipper);
        } else
        {
            $this->resizeByDimension($request, $dimension,  $file, $zipper);
        }
    }

    /**
     * @param Request $request
     * @param         $dimension
     * @param         $currentFile
     * @param         $actualTotalFiles
     * @param         $file
     * @param         $zipper
     */
    protected function resizeByDimension(Request $request, $dimension, $file, $zipper)
    {
        $d = explode('x', $dimension);
        $width = trim($d[0]);
        $height = isset($d[1]) ? trim($d[1]) : $width;
        if (!is_numeric($width) || $width <= 0)
        {
            $width = 100;
        }
        if (!is_numeric($height) || $height <= 0)
        {
            $height = $width;
        }
        $this->currentFile++;
        $percentageComplete = ceil(($this->currentFile / $this->actualTotalFiles) * 100);
        event(new FileBeingProcessed($percentageComplete, $request->input('channel')));
        $this->resizeFileByDimensionsAndAddToZip($file, $width, $height, $zipper);
    }

    protected function resizeResponsive(Request $request, $dimension, $file, $zipper)
    {
        if(str_contains($dimension,'x'))
        {
            $this->resizeByDimension($request, $dimension, $file, $zipper);
        }
        else
        {
            $width = trim($dimension);
            if (!is_numeric($width) || $width <= 0)
            {
                $width = 100;
            }

            $this->currentFile++;
            $percentageComplete = ceil(($this->currentFile / $this->actualTotalFiles) * 100);
            event(new FileBeingProcessed($percentageComplete, $request->input('channel')));
            $this->responsiveResize($file, $width, $zipper);
        }
    }


    /**
     * @param $file
     * @param $width
     * @param $height
     * @param $zipper
     */
    protected function resizeFileByDimensionsAndAddToZip($file, $width, $height, $zipper)
    {
        $extension = $file->getClientOriginalExtension();
        $img = Image::make($file)->fit($width, $height);
        $resizedName = str_replace($extension, "{$width}x{$height}.{$extension}", $file->getClientOriginalName());
        $img->save($resizedName, 100);
        $zipper->addString($resizedName, $img);
        $img->destroy();
        @unlink($resizedName);
    }

    /**
     * @param $file
     * @param $width
     * @param $zipper
     */
    private function responsiveResize($file, $width, $zipper)
    {
        $extension = $file->getClientOriginalExtension();
        $img = Image::make($file)->widen($width);
        $resizedName = str_replace($extension, "{$width}.{$extension}", $file->getClientOriginalName());
        $img->save($resizedName, 100);
        $zipper->addString($resizedName, $img);
        $img->destroy();
        @unlink($resizedName);
    }
}
