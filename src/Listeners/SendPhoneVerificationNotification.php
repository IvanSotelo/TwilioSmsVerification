<?php

namespace IvanSotelo\TwilioVerify\Listeners;

use Illuminate\Auth\Events\Registered;
use IvanSotelo\TwilioVerify\Contracts\MustVerifyPhone;

class SendPhoneVerificationNotification
{
    /**
     * Handle the event.
     *
     * @param  \Illuminate\Auth\Events\Registered  $event
     * @return void
     */
    public function handle(Registered $event)
    {
        if ($event->user instanceof MustVerifyPhone && ! $event->user->hasVerifiedPhone()) {
            $event->user->sendPhoneVerificationNotification();
        }
    }
}
