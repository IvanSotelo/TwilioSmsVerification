<?php

namespace IvanSotelo\TwilioVerify\Tests\Feature;

use IvanSotelo\TwilioVerify\Notifications\VerifyPhone;
use Illuminate\Support\Facades\Notification;

class UserTest extends FeatureTestCase
{
    public function test_must_verify_phone_trait()
    {
        $user = $this->createUser('customers_in_openpay_can_be_updated');
        $code = $user->generateVerificationCode();

        $this->assertEquals($user->phone_number, $user->routeNotificationForTwilio());
        $this->assertEquals(6, strlen($code));
        $this->assertEquals($user->verification_code, $code);
    }

    public function test_send_notification()
    {
        Notification::fake();

        Notification::assertNothingSent();
        $user = $this->createUser('customers_in_openpay_can_be_updated');
        $user->sendPhoneVerificationNotification();

        Notification::assertSentTo($user, VerifyPhone::class, function (VerifyPhone $notification, $channels) use ($user){
            return in_array('NotificationChannels\Twilio\TwilioChannel', $channels) && $notification->code === $user->verification_code;
        });
    }

    public function test_verify_phone()
    {
        $user = $this->createUser('user_phone_verification');
        $this->actingAs($user);
        $code = $user->generateVerificationCode();
        $response = $this->getJson('twilio/phone/verify/'.$code);
        $response->assertStatus(302);
    }


}
