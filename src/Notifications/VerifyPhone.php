<?php

namespace IvanSotelo\TwilioVerify\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use NotificationChannels\Twilio\TwilioChannel;
use NotificationChannels\Twilio\TwilioSmsMessage;
use Illuminate\Notifications\Notification;

class VerifyPhone extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * The verification code.
     *
     * @var integer
     */
    public $code;

    /**
     * Create a new code verification notification.
     *
     * @param  Integer $code
     * @return void
     */
    public function __construct(Int $code)
    {
        $this->code = $code;
    }

    /**
     * Get the notification's twilio channel.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [TwilioChannel::class];
    }

    /**
     * Get the sms representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \NotificationChannels\Twilio\TwilioSmsMessage
     */
    public function toTwilio($notifiable)
    {
        return (new TwilioSmsMessage())
            ->content(__('This is your verification code. :code.', ['code' => $this->code]));
    }
}