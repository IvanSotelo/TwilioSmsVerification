<?php

namespace IvanSotelo\TwilioVerify\Tests\Fixtures;

use Illuminate\Foundation\Auth\User as Model;
use Illuminate\Notifications\Notifiable;
use IvanSotelo\TwilioVerify\Concerns\MustVerifyPhone;
use IvanSotelo\TwilioVerify\Contracts\MustVerifyPhoneContract;

class User extends Model implements MustVerifyPhoneContract
{
    use MustVerifyPhone, Notifiable;

    /**
     * Route notifications for the Twilio channel.
     *
     * @param  \Illuminate\Notifications\Notification  $notification
     * @return string
     */
    public function routeNotificationForTwilio()
    {
        return $this->phone_number;
    }
}
