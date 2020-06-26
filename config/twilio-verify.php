<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Twilio Keys
    |--------------------------------------------------------------------------
    |
    | The Twilio publishable account_sid, token and verify sid key give you access to
    | Twilio's API. The "publishable" key is typically used when interacting
    | with Twilio.js while the "token" key accesses private API endpoints.
    |
    */

    'account_sid' => env('TWILIO_SID'),

    'token' => env('TWILIO_AUTH_TOKEN'),

    'verify_sid' => env('TWILIO_VERIFY_SID'),

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
    | Twilio Verify phone number
    |--------------------------------------------------------------------------
    |
    | This is the Twilio phone number you purchased at twilio.com/console.
    |
    */

    'phone_number' => env('TWILIO_NUMBER'),

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
