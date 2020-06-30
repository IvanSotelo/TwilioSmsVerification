<?php

namespace IvanSotelo\TwilioVerify\Traits;

use IvanSotelo\TwilioVerify\Notifications\VerifyPhone;

trait MustVerifyPhone
{
    /**
     * Determine if the user has verified their email address.
     *
     * @return bool
     */
    public function hasVerifiedPhone()
    {
        return ! is_null($this->phone_verified_at);
    }

    /**
     * Mark the given user's email as verified.
     *
     * @return bool
     */
    public function markPhoneAsVerified()
    {
        return $this->forceFill([
            'phone_verified_at' => $this->freshTimestamp(),
        ])->save();
    }

    /**
     * Send the sms verification notification.
     *
     * @return void
     */
    public function sendPhoneVerificationNotification()
    {
        $this->notify(new VerifyPhone($this->generateVerificationCode()));
    }

    /**
     * Create and validate a unique verification code.
     *
     * @return string
     */
    public function generateVerificationCode()
    {
        $code = $this->createVerificationCode();

        $codeExists = $this->validateVerificationCode($code);

        $generationLimit = 100;

        while($codeExists && $generationLimit > 0)
        {
            $code = $this->createVerificationCode();

            $codeExists = $this->validateVerificationCode($code);

            $generationLimit--;
        }

        $this->forceFill([
            'verification_code' => $code
        ])->save();

        return $code;
    }

    /**
     * Generate a random verification code.
     *
     * @return string
     */
    public function createVerificationCode()
    {
        return $code = random_int(100000, 999999);
    }

    /**
     * Validate the random verification code.
     *
     * @param  $code
     * @return mixed
     */
    public function validateVerificationCode($code)
    {
        $model = config('twilio-verify.model');
        return $codeExists = $model::where('verification_code', '=', $code)->whereNull('phone_verified_at')->exists();
    }
}
