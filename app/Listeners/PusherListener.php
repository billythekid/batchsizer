<?php

namespace App\Listeners;

use App\Events\FileBeingProcessed;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;

class PusherListener implements ShouldQueue
{
    public $connection;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        $this->connection = 'sync';
    }

    /**
     * Handle the event.
     *
     * @param  FileBeingProcessed  $event
     * @return void
     */
    public function handle(FileBeingProcessed $event)
    {
    }
}
