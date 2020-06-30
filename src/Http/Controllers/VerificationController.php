<?php

namespace IvanSotelo\TwilioVerify\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\RedirectsUsers;
use Illuminate\Routing\Controller;
use IvanSotelo\TwilioVerify\Exceptions\CodeProvided;

class VerificationController extends Controller
{
    use RedirectsUsers;
    /*
    |--------------------------------------------------------------------------
    | Phone Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling phone verification for any
    | user that recently registered with the application. Phone numbers may also
    | be re-sent if the user didn't receive the original sms message.
    |
    */

    /**
     * Where to redirect users after verification.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Mark the authenticated user's number phone as verified.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function verify(Request $request)
    {
        // return $request->user()->verification_code . '-' . $request->code;
        if (strval($request->user()->verification_code) !== $request->code) {
            throw CodeProvided::wrong();
        }

        if ($request->user()->hasVerifiedPhone()) {
            return redirect($this->redirectPath());
        }

        if ($request->user()->markPhoneAsVerified()) {
            event(new Verified($request->user()));
        }

        return redirect($this->redirectPath())->with('status', __('Your phone was successfully verified!'));
    }

    /**
     * Resend the phone verification notification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function resend(Request $request)
    {
        if ($request->user()->hasVerifiedPhone()) {
            return redirect($this->redirectPath());
        }

        $request->user()->sendPhoneVerificationNotification();

        return response()->json(['status'=>'ok','message' => __('Your code has been resent successfully.')],200);
    }
}
