<?php

namespace IvanSotelo\TwilioVerify\Http\Middleware;

use Closure;

use IvanSotelo\TwilioVerify\Contracts\MustVerifyPhoneContract;

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
          ($request->user() instanceof MustVerifyPhoneContract &&
          ! $request->user()->hasVerifiedPhone())) {
            return response()->json([
                'errors' => [
                    'message' => [
                        __('Your phone has not been verified yet.'),
                    ],
                ],
                'message' => __('Your phone has not been verified yet.'),
            ], 403);
      }

      return $next($request);
  }
}
