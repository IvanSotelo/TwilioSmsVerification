<?php

namespace IvanSotelo\TwilioVerify;

class TwilioVerify
{
    /**
     * The TwilioVerify library version.
     *
     * @var string
     */
    const VERSION = '1.0.0';

    /**
     * Indicates if TwilioVerify migrations will be run.
     *
     * @var bool
     */
    public static $runsMigrations = true;

    /**
     * Indicates if TwilioVerify routes will be registered.
     *
     * @var bool
     */
    public static $registersRoutes = true;

    /**
     * Configure TwilioVerify to not register its migrations.
     *
     * @return static
     */
    public static function ignoreMigrations()
    {
        static::$runsMigrations = false;

        return new static;
    }

    /**
     * Configure TwilioVerify to not register its routes.
     *
     * @return static
     */
    public static function ignoreRoutes()
    {
        static::$registersRoutes = false;

        return new static;
    }
}
