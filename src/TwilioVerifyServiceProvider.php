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
        $this->registerLogger();
        // $this->registerRoutes();
        // $this->registerResources();
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
        $this->bindLogger();
        $this->bindTwilio();
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
     * Bind the Openpay logger interface to the TwilioVerify logger.
     *
     * @return void
     */
    protected function bindLogger()
    {
        $this->app->bind(LoggerInterface::class, function ($app) {
            return new Logger(
                $app->make('log')->channel(config('twilio-verify.logger'))
            );
        });
    }

    /**
     * Bind the Twilio Client to the TwilioVerify class.
     *
     * @return void
     */
    protected function bindTwilio()
    {
        $this->app->bind('TwilioVerify', function ($app) {
            $this->ensureConfigValuesAreSet();
            $client = new Client(config('twilio-verify.account_sid'), config('twilio-verify.token'));
            return new TwilioVerify($client);
        });
    }

    /**
     * Ensure that all the keys we defined in the config file.
     *
     * @return void
     */
    protected function ensureConfigValuesAreSet()
    {
        $mandatoryAttributes = config('twilio-verify');

        foreach ($mandatoryAttributes as $key => $value) {
            if (empty($value)) {
                throw new Exception("Please provide a value for ${key}");
            }
        }
    }

    /**
     * Register the Openpay logger.
     *
     * @return void
     */
    protected function registerLogger()
    {
        if (config('twilio-verify.logger')) {
            //Stripe::setLogger($this->app->make(LoggerInterface::class));
        }
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
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'twilio-verify');
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

            // $this->publishes([
            //     __DIR__.'/../resources/views' => $this->app->resourcePath('views/vendor/twilio-verify'),
            // ], 'twilio-verify-views');
        }
    }
}
