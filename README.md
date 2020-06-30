# TwilioVerify

<p align="center">
<a href="https://github.com/IvanSotelo/TwilioVerify/actions"><img src="https://github.com/IvanSotelo/TwilioVerify/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/IvanSotelo/TwilioVerify"><img src="https://poser.pugx.org/IvanSotelo/TwilioVerify/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/IvanSotelo/TwilioVerify"><img src="https://poser.pugx.org/IvanSotelo/TwilioVerify/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/IvanSotelo/TwilioVerify"><img src="https://poser.pugx.org/IvanSotelo/TwilioVerify/license.svg" alt="License"></a>
</p>

## Introduction

TwilioVerify makes it easier and safer than custom verification systems to verify a user’s phone number. It ensures that the phone number is valid by sending a short code via SMS to the number during registration. This can help reduce the number of fake accounts created and failure rates when sending SMS notifications to users.

This package use [Twilio notifications channel](https://github.com/laravel-notification-channels/twilio).

## Contents

- [Installation](#installation)
	- [Setting up your Twilio account](#setting-up-your-twilio-account)
- [Usage](#usage)
	- [Available Message methods](#available-message-methods)
- [License](#license)

## Installation

You can install the package via composer:

``` bash
composer require ivansotelo/twilio-verify
```

In app/config/app.php add the following :

```PHP
IvanSotelo\TwilioVerify\TwilioVerifyServiceProvider::class,
```

### Configuration

Add your Twilio Account SID, Auth Token, and From Number (optional) to your `.env`:

```dotenv
TWILIO_USERNAME=XYZ # optional when using auth token
TWILIO_PASSWORD=ZYX # optional when using auth token
TWILIO_AUTH_TOKEN=ABCD # optional when using username and password
TWILIO_ACCOUNT_SID=1234 # always required
TWILIO_FROM=100000000 # otional default from
TWILIO_ALPHA_SENDER=HELLO # optional
TWILIO_DEBUG_TO=23423423423 # Set a number that call calls/messages should be routed to for debugging
```

### Advanced configuration

Run `php artisan vendor:publish --provider="IvanSotelo\TwilioVerify\TwilioVerifyServiceProvider" --tag=config`
```
/config/twilio-verify.php
```

To run the migrations from this package use the following command:
```
php artisan migrate --path="/vendor/ivansotelo/twilio-verify/database/migrations"
```

The package by default use the `App\User:class` to get the table name.

To customize the migration, publish it with the following command:

```
php artisan vendor:publish --provider="IvanSotelo\TwilioVerify\TwilioVerifyServiceProvider" --tag="migrations"
```

Twilio Verify assumes your MustVerifyPhone trait will be the App\User class that ships with Laravel. If you wish to change this you can specify a different model in your .env file:

```
TWILIO_VERIFY_MODEL=App\User
```

## Usage

Add the MustVerifyPhone trait to your model definition. This trait provides various methods to allow you to send verification phone code.

``` php
use IvanSotelo\TwilioVerify\Traits\MustVerifyPhone;
use IvanSotelo\TwilioVerify\Contracts\MustVerifyPhoneContract;

class User extends Authenticatable implements MustVerifyPhoneContract
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
```

On EventServiceProvider attach SendPhoneVerificationNotification to the Illuminate\Auth\Events\Registered event:

``` php
namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Verified;
use Illuminate\Auth\Events\Registered;
use IvanSotelo\TwilioVerify\Listeners\SendPhoneVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendPhoneVerificationNotification::class,
        ],
        Verified::class => [
            // You can attach some listener
        ],
    ];
}
```

To register the default middleware add the following lines to the `$routeMiddleware` array within the `app/Http/Kernel.php` file:

```php
protected $routeMiddleware = [
    // …
    'isVerified' => \IvanSotelo\TwilioVerify\Http\Middleware\EnsurePhoneIsVerified::class,
```

Apply the middleware on your routes:

```php
Route::group(['middleware' => ['isVerified']], function () {
    // …
```

By default this packages ships with two routes.

```PHP
Route::get('phone/verify/{code}', 'VerificationController@verify')->name('verification.verify');
Route::post('phone/resend', 'VerificationController@resend')->name('verification.resend');
```

To customize the translations you may publish the files to your `resources/lang/vendor` folder using the following command:

```
php artisan vendor:publish --provider="IvanSotelo\TwilioVerify\TwilioVerifyServiceProvider" --tag="translations"
```

## License

TwilioVerify is open-sourced software licensed under the [MIT license](LICENSE.md).
