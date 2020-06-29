<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Twilio Verify Model
    |--------------------------------------------------------------------------
    |
    | This is the model in your application that implements the MustVerifyPhone
    | trait provided by Twilio Verify. It will serve as the primary model you
    | use while interacting with Twilio Verify related methods.
    |
    */

    'model' => env('TWILIO_VERIFY_MODEL', App\User::class),

    /*
    |--------------------------------------------------------------------------
    | Twilio Verify Path
    |--------------------------------------------------------------------------
    |
    | This is the base URI path where Twilio Verifys's controllers, such as the
    | resend route, will be available from. You're free to tweak
    | this path according to your preferences and application design.
    |
    */

    'path' => env('TWILIO_VERIFY_PATH', 'twilio'),

    /*
    |--------------------------------------------------------------------------
    | Twilio Logger
    |--------------------------------------------------------------------------
    |
    | This setting defines which logging channel will be used by the Twilio
    | library to write log messages. You are free to specify any of your
    | logging channels listed inside the "logging" configuration file.
    |
    */

    'logger' => env('TWILIO_VERIFY_LOGGER'),

];
