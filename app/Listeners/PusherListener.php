<?php

namespace App\Listeners;

use App\Events\FileBeingProcessed;
use Illuminate\Support\Facades\Log;

class PusherListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
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
