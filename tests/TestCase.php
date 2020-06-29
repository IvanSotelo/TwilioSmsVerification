<?php

namespace IvanSotelo\TwilioVerify\Tests;

use IvanSotelo\TwilioVerify\TwilioVerifyServiceProvider;
use Orchestra\Testbench\TestCase as OrchestraTestCase;

abstract class TestCase extends OrchestraTestCase
{
    protected function getPackageProviders($app)
    {
        return [TwilioVerifyServiceProvider::class];
    }
}
