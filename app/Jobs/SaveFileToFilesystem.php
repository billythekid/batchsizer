<?php

namespace App\Jobs;

use App\Jobs\Job;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Intervention\Image\Facades\Image;


class SaveFileToFilesystem extends Job implements ShouldQueue
{

    use InteractsWithQueue, SerializesModels;

    private $directory;
    private $file;

    /**
     * Create a new job instance.
     *
     * @param $directory
     * @param $file
     * @internal param $files
     */
    public function __construct($directory, $file)
    {

        $this->directory = $directory;
        $this->file = $file;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        DB::reconnect();
        $saveName = "{$this->directory}/{$this->file}";
        $filePath = storage_path() . "/app/{$saveName}";
        $resource = fopen($filePath, 'r');
        Storage::put($saveName, $resource);
        fclose($resource);
        @unlink(storage_path() . "/app/{$this->directory}/{$this->file}");
    }
}
