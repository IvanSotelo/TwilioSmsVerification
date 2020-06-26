<?php

namespace IvanSotelo\TwilioVerify\Facades;

use Illuminate\Support\Facades\Facade;

class TwilioVerify extends Facade
{
    public static function getFacadeAccessor()
    {
        return 'twilioverify';
    }
}
