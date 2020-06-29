
<?php

use Illuminate\Support\Facades\Route;

// Register the typical phone verification routes for an application.
Route::get('phone/verify/{code}', 'VerificationController@verify')->name('verification.verify');
Route::post('phone/resend', 'VerificationController@resend')->name('verification.resend');
