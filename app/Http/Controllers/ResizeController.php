<?php

namespace App\Http\Controllers;

use App\Events\FileBeingProcessed;
use App\Http\Requests;
use Chumper\Zipper\Zipper;
use File;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use Log;


class ResizeController extends Controller
{

    private $actualTotalFiles;
    private $currentFile = 0;

    public function resize(Request $request)
    {
        $uploadLimit = $this->getUploadLimit($request);

        $zipFileName = 'batches/' . time() . '.zip';
        $zipper = new Zipper;
        $zipper->make($zipFileName);

        $dimensions = explode(',', $request->input('dimensions'));
        $files = $request->files->all()['picture'];

        $files = array_slice($files, 0, $uploadLimit);
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
            $this->resizeResponsive($request, $dimension, $file, $zipper);
        } else
        {
            $this->resizeByDimension($request, $dimension, $file, $zipper);
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
            $width = 0;
        }
        if (!is_numeric($height) || $height <= 0)
        {
            $height = $width;
        }
        $this->currentFile++;
        $percentageComplete = ceil(($this->currentFile / $this->actualTotalFiles) * 100);
        event(new FileBeingProcessed($percentageComplete, $request->input('channel')));
        $this->resizeFileByDimensionsAndAddToZip($request, $file, $width, $height, $zipper);
    }

    protected function resizeResponsive(Request $request, $dimension, $file, $zipper)
    {
        if (str_contains($dimension, 'x'))
        {
            $this->resizeByDimension($request, $dimension, $file, $zipper);
        } else
        {
            $width = trim($dimension);
            if (!is_numeric($width) || $width <= 0)
            {
                $width = 0;
            }

            $this->currentFile++;
            $percentageComplete = ceil(($this->currentFile / $this->actualTotalFiles) * 100);
            event(new FileBeingProcessed($percentageComplete, $request->input('channel')));
            $this->responsiveResize($request, $file, $width, $zipper);
        }
    }


    /**
     * @param $file
     * @param $width
     * @param $height
     * @param $zipper
     */
    protected function resizeFileByDimensionsAndAddToZip($request, $file, $width, $height, $zipper)
    {
        $extension = $file->getClientOriginalExtension();
        if ($width == 0)
        {
            $img = Image::make($file);
            $width = $img->width();
            $height = $img->height();
        } else
        {
            if ($request->has('noupscale'))
            {
                $img = Image::make($file)->fit($width, $height, function ($constraint)
                {
                    $constraint->upsize();
                });
                $width = $img->width();
                $height = $img->height();
            } else
            {
                $img = Image::make($file)->fit($width, $height);
            }
        }
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
    private function responsiveResize($request, $file, $width, $zipper)
    {
        $extension = $file->getClientOriginalExtension();
        if ($width == 0)
        {
            $img = Image::make($file);
            $width = $img->width();
        } else
        {
            if ($request->has('noupscale'))
            {
                $img = Image::make($file)->widen($width, function ($constraint)
                {
                    $constraint->upsize();
                });
                $width = $img->width();
            } else
            {
                $img = Image::make($file)->widen($width);
            }
        }
        $resizedName = str_replace($extension, "{$width}.{$extension}", $file->getClientOriginalName());
        $img->save($resizedName, 100);
        $zipper->addString($resizedName, $img);
        $img->destroy();
        @unlink($resizedName);
    }

    private function getUploadLimit(Request $request)
    {
        if (Auth::check())
        {
            return 25;
        }

        return 10; //not logged in
    }

    public function examples()
    {
        $originals = [
            [
                "file"         => "/examples/originals/1.jpg",
                "thumb"        => "/examples/originals/tn-1.jpg",
                "width"        => 5398,
                "height"       => 3599,
                "filesize"     => 4048056,
                "photographer" => "Carli Jean",
                "link"         => "https://unsplash.com/photos/UWRqlJcDCXA",
            ],
            [
                "file"         => "/examples/originals/2.jpeg",
                "thumb"        => "/examples/originals/tn-2.jpeg",
                "width"        => 4500,
                "height"       => 3000,
                "filesize"     => 4501440,
                "photographer" => "Vladimir Kudinov",
                "link"         => "https://unsplash.com/photos/OT5nbP2m24I",
            ],
            [
                "file"         => "/examples/originals/3.jpg",
                "thumb"        => "/examples/originals/tn-3.jpg",
                "width"        => 4288,
                "height"       => 2848,
                "filesize"     => 2382367,
                'photographer' => 'Stefanus Martanto Setyo Husodo',
                "link"         => 'https://unsplash.com/photos/GKR1tBkmW3M',
            ],
            [
                "file"         => "/examples/originals/5.jpg",
                "thumb"        => "/examples/originals/tn-5.jpg",
                "width"        => 6935,
                "height"       => 4283,
                "filesize"     => 8777663,
                "photographer" => "Dmitry Sytnik",
                "link"         => "https://unsplash.com/photos/bW2vHKCxbx4",
            ],
            [
                "file"         => "/examples/originals/6.jpg",
                "thumb"        => "/examples/originals/tn-6.jpg",
                "width"        => 5616,
                "height"       => 3744,
                "filesize"     => 4560702,
                "photographer" => "Benjamin Combs",
                "link"         => "https://unsplash.com/photos/hiAdjnXZxl8",
            ],
            [
                "file"         => "/examples/originals/7.jpg",
                "thumb"        => "/examples/originals/tn-7.jpg",
                "width"        => 4912,
                "height"       => 2760,
                "filesize"     => 3588691,
                "photographer" => 'Lili Popper',
                "link"         => 'https://unsplash.com/photos/71cd1rWqO8M',
            ],
        ];

        $sizes = [250, 768, 1024, 2048, 5096];
        $examples = [
            [
                "folder"     => 1,
                "quality"    => "100",
                "responsive" => true,
                "upscaling"  => true,
                "ratio"      => true,
                "greyscale"  => false,
                "red"        => 0,
                "green"      => 0,
                "blue"       => 0,
                "pixels"     => 0,
                "zip"        => "examples-250-768-1024-2048-5096-q100.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/1')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => $sizes,
            ],
            [
                "folder"     => 2,
                "quality"    => "95",
                "responsive" => true,
                "upscaling"  => true,
                "ratio"      => true,
                "greyscale"  => false,
                "red"        => 0,
                "green"      => 0,
                "blue"       => 0,
                "pixels"     => 0,
                "zip"        => "examples-250-768-1024-2048-5096-q95.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/2')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => $sizes,
            ],
            [
                "folder"     => 3,
                "quality"    => "75",
                "responsive" => true,
                "upscaling"  => true,
                "ratio"      => true,
                "greyscale"  => false,
                "red"        => 0,
                "green"      => 0,
                "blue"       => 0,
                "pixels"     => 0,
                "zip"        => "examples-250-768-1024-2048-5096-q75.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/3')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => $sizes,
            ],
            [
                "folder"     => 4,
                "quality"    => "50",
                "responsive" => true,
                "upscaling"  => true,
                "ratio"      => true,
                "greyscale"  => false,
                "red"        => 0,
                "green"      => 0,
                "blue"       => 0,
                "pixels"     => 0,
                "zip"        => "examples-250-768-1024-2048-5096-q50.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/4')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => $sizes,
            ],
            [
                "folder"     => 5,
                "quality"    => "75",
                "responsive" => false,
                "upscaling"  => true,
                "ratio"      => false,
                "greyscale"  => false,
                "red"        => 0,
                "green"      => 0,
                "blue"       => 0,
                "pixels"     => 0,
                "zip"        => "examples-250-768-1024-2048-5096-q75.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/5')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => $sizes,
            ],
            [
                "folder"     => 6,
                "quality"    => "75",
                "responsive" => false,
                "upscaling"  => false,
                "ratio"      => true,
                "greyscale"  => true,
                "red"        => 0,
                "green"      => 0,
                "blue"       => 0,
                "pixels"     => 0,
                "zip"        => "examples-250-768-1024-2048-5096-q75-bw.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/6')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => $sizes,
            ],
            [
                "folder"     => 7,
                "quality"    => "75",
                "responsive" => true,
                "upscaling"  => true,
                "ratio"      => true,
                "greyscale"  => false,
                "red"        => 50,
                "green"      => 0,
                "blue"       => 0,
                "pixels"     => 0,
                "zip"        => "examples-250-768-1024-2048-5096-q75-r50g0b0.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/7')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => $sizes,
            ],
            [
                "folder"     => 8,
                "quality"    => "75",
                "responsive" => true,
                "upscaling"  => true,
                "ratio"      => true,
                "greyscale"  => true,
                "red"        => 50,
                "green"      => 0,
                "blue"       => 0,
                "pixels"     => 0,
                "zip"        => "examples-250-768-1024-2048-5096-q75-bw-r50g0b0.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/8')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => $sizes,
            ],
            [
                "folder"     => 9,
                "quality"    => "75",
                "responsive" => true,
                "upscaling"  => true,
                "ratio"      => true,
                "greyscale"  => true,
                "red"        => 50,
                "green"      => 50,
                "blue"       => 50,
                "pixels"     => 0,
                "zip"        => "examples-250-768-1024-2048-5096-q75-bw-r50g50b50.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/9')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => $sizes,
            ],
            [
                "folder"     => 10,
                "quality"    => "50",
                "responsive" => true,
                "upscaling"  => true,
                "ratio"      => true,
                "greyscale"  => false,
                "red"        => 0,
                "green"      => 0,
                "blue"       => 0,
                "pixels"     => "xs",
                "zip"        => "examples-250-768-1024-2048-5096-q50.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/10')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => $sizes,
            ],
            [
                "folder"     => 11,
                "quality"    => "50",
                "responsive" => true,
                "upscaling"  => true,
                "ratio"      => true,
                "greyscale"  => false,
                "red"        => 0,
                "green"      => 0,
                "blue"       => 0,
                "pixels"     => "m",
                "zip"        => "examples-250-768-1024-2048-5096-q50.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/11')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => $sizes,
            ],
            [
                "folder"     => 12,
                "quality"    => "50",
                "responsive" => true,
                "upscaling"  => true,
                "ratio"      => true,
                "greyscale"  => false,
                "red"        => 0,
                "green"      => 0,
                "blue"       => 0,
                "pixels"     => "xl",
                "zip"        => "examples-250-768-1024-2048-5096-q50.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/12')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => $sizes,
            ],
            [
                "folder"     => 13,
                "quality"    => "50",
                "responsive" => false,
                "upscaling"  => true,
                "ratio"      => true,
                "greyscale"  => false,
                "red"        => 0,
                "green"      => 0,
                "blue"       => 0,
                "pixels"     => 0,
                "zip"        => "examples-250x125-768x384-1024x512-2048x1024-5096x2048-q50.zip",
                "files"      => array_filter(File::allFiles(public_path('images/examples/13')), function ($array)
                {
                    return (!starts_with($array->getBasename(), 'tn-') && !ends_with($array->getBasename(), '.zip'));
                }),
                "sizes"      => ["250x125", "768x384", "1024x512", "2048x1024", "5096x2048"],
            ],

        ];

        foreach ($examples as &$example)
        {
            usort($example['files'], 'sort_by_file_width');
            foreach($example['files'] as &$file)
            {
                $path = $file->getRealPath();
                $file->size = getimagesize($path);
            }
        }


        /*
               $example = $examples[3];
                    foreach ($example['files'] as $file)
                    {
                        $filename = $file->getBasename();
                        $path = $file->getPath();
                        if (!file_exists($path . "/tn-" . $filename) && !ends_with($filename, '.zip') )
                        {
                            Image::make($file)->widen(250)->save($path . "/tn-" . $filename);
                        }
                    }
        */

        return view()->make('examples.index', compact('originals', 'examples'));
    }

}
