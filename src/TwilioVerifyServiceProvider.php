<?php

namespace IvanSotelo\TwilioVerify;

use Twilio\Rest\Client;
use IvanSotelo\TwilioVerify\TwilioVerify;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class TwilioVerifyServiceProvider extends ServiceProvider
{
    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerRoutes();
        $this->registerResources();
        $this->registerMigrations();
        $this->registerPublishing();
    }

    /**
     * Register bindings in the container.
     *
     * @return void
     */
    public function register()
    {
        $this->configure();
    }

    /**
     * Setup the configuration for TwilioVerify.
     *
     * @return void
     */
    protected function configure()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/twilio-verify.php', 'twilio-verify'
        );
    }

    /**
     * Register the package routes.
     *
     * @return void
     */
    protected function registerRoutes()
    {
        if (TwilioVerify::$registersRoutes) {
            Route::group([
                'prefix' => config('twilio-verify.path'),
                'namespace' => 'IvanSotelo\TwilioVerify\Http\Controllers',
                'as' => 'twilio-verify.',
            ], function () {
                $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
            });
        }
    }

    /**
     * Register the package resources.
     *
     * @return void
     */
    protected function registerResources()
    {
        $this->loadJsonTranslationsFrom(__DIR__.'/../resources/lang');
    }

    /**
     * Register the package migrations.
     *
     * @return void
     */
    protected function registerMigrations()
    {
        if (TwilioVerify::$runsMigrations && $this->app->runningInConsole()) {
            $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        }
    }

    /**
     * Register the package's publishable resources.
     *
     * @return void
     */
    protected function registerPublishing()
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/twilio-verify.php' => $this->app->configPath('twilio-verify.php'),
            ], 'twilio-verify-config');

            $this->publishes([
                __DIR__.'/../database/migrations' => $this->app->databasePath('migrations'),
            ], 'twilio-verify-migrations');
        }
    }
}
