<?php

namespace IvanSotelo\TwilioVerify;

use Twilio\Rest\Client;

class TwilioVerify
{
    /** @var Twilio\Rest\Client */
    protected $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function notify(string $number, string $message)
    {
        return $this->client->messages->create($number, [
            'from' => config('twilio-verify.phone_number'),
            'body' => $message
        ]);
    }
}
