<?php

namespace IvanSotelo\TwilioVerify\Exceptions;

use Exception;

class CodeProvided extends Exception
{
    /**
     * Create a new CodeProvidedWrong instance.
     *
     * @return static
     */
    public static function wrong()
    {
        return new static(__('The code your provided is wrong. Please try again or request another call.'));
    }
}
