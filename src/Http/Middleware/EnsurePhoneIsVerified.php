<?php

namespace IvanSotelo\TwilioVerify\Http\Middleware;

use Closure;

use IvanSotelo\TwilioVerify\Traits\MustVerifyPhone;

class EnsurePhoneIsVerified
{
  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @param  string|null  $redirectToRoute
   * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
   */
  public function handle($request, Closure $next, $redirectToRoute = null)
  {
      if (! $request->user() ||
          ($request->user() instanceof MustVerifyPhone &&
          ! $request->user()->hasVerifiedPhone())) {
            return response()->json([
                'errors' => [
                    'message' => [
                        __('errors.phone_not_verified'),
                    ],
                ],
                'message' => __('errors.phone_not_verified'),
            ], 403);
      }

      return $next($request);
  }
}
