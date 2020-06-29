<?php

namespace IvanSotelo\TwilioVerify\Tests\Feature;

use Illuminate\Database\Eloquent\Model as Eloquent;
use IvanSotelo\TwilioVerify\Tests\Fixtures\User;
use IvanSotelo\TwilioVerify\Tests\TestCase;

abstract class FeatureTestCase extends TestCase
{

    public static function setUpBeforeClass(): void
    {
        parent::setUpBeforeClass();
    }

    protected function setUp(): void
    {
        // Delay consecutive tests to prevent Openpay rate limiting issues.
        sleep(2);

        parent::setUp();

        Eloquent::unguard();

        $this->loadLaravelMigrations();

        $this->artisan('migrate')->run();
    }

    protected function createUser($description = 'ivan', $options = []): User
    {
        return User::create(array_merge([
            'email' => "{$description}@cashier-test.com",
            'name' => 'Ivan Sotelo',
            'phone_number' => '+526366976926',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        ], $options));
    }
}
