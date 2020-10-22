<?php

namespace IvanSotelo\TwilioVerify\Contracts;

interface MustVerifyPhone
{
    /**
     * Determine if the user has verified their phone.
     *
     * @return bool
     */
    public function hasVerifiedPhone();

    /**
     * Mark the given user's phone as verified.
     *
     * @return bool
     */
    public function markPhoneAsVerified();

    /**
     * Send the sms verification notification.
     *
     * @return void
     */
    public function sendPhoneVerificationNotification();

    /**
     * Create and validate a unique verification code.
     *
     * @return string
     */
    public function generateVerificationCode();

    /**
     * Generate a random verification code..
     *
     * @return string
     */
    public function createVerificationCode();

    /**
     * Validate the random verification code.
     *
     * @param  $code
     * @return mixed
     */
    public function validateVerificationCode($code);

    /**
     * Route notifications for the Twilio channel.
     *
     * @param  \Illuminate\Notifications\Notification  $notification
     * @return string
     */
    public function routeNotificationForTwilio();
}
