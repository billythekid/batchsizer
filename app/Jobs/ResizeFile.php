<?php

namespace App\Jobs;

use App\Jobs\Job;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ResizeFile extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;

    private $directory;
    private $file;
    private $sizes;
    private $options;


    /**
     * Create a new job instance.
     *
     * @param        $directory
     * @param        $file
     * @param        $sizes
     * @param        $options
     * @param string $connection
     */
    public function __construct($directory, $file,  $sizes, $options, $connection = 'sync' )
    {
        $this->connection = $connection;
        $this->directory = $directory;
        $this->file = $file;
        $this->sizes = $sizes;
        $this->options = $options;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
    }
}
