<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;


class FileBeingProcessed extends Event implements ShouldBroadcast
{

    use SerializesModels;
    public $percentage;
    public $channel;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($percentage, $channel)
    {
        $this->percentage = $percentage;
        $this->channel = $channel;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [$this->channel];
    }
}
