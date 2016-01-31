<?php

namespace App\Jobs;

use App\Jobs\Job;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;


class SaveFileToFilesystem extends Job implements ShouldQueue
{

    use InteractsWithQueue, SerializesModels;

    private $directory;
    private $file;
    /**
     * @type
     */
    private $realPath;
    /**
     * @type
     */
    private $deleteOnComplete;

    /**
     * Create a new job instance.
     *
     * @param $directory
     * @param $file
     * @internal param $files
     */
    public function __construct($realPath, $directory, $file, $deleteOnComplete)
    {
        $this->connection = 'database';
        $this->directory = $directory;
        $this->file = $file;
        $this->realPath = $realPath;
        $this->deleteOnComplete = $deleteOnComplete;
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
        if(File::exists($this->realPath))
        {
            Storage::put($saveName, File::get($this->realPath));
        }
        if ($this->deleteOnComplete)
        {
            File::delete($this->realPath);
        }
    }
}
