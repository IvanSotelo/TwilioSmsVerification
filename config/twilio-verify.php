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

    'random_int' => [
        'initial_value' => 100000,
        'final_value' => 999999,
    ],

];
