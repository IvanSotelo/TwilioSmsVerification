<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTwilioColumns extends Migration
{
    /**
     * Determine the user table name.
     *
     * @return string
     */
    public function getUserTableName()
    {
        $user_model = config('twilio-verify.model');

        return (new $user_model)->getTable();
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table($this->getUserTableName(), function (Blueprint $table) {
            $table->string('phone_number')->unique()->nullable();
            $table->string('verification_code')->unique()->nullable();
            $table->timestamp('phone_verified_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table($this->getUserTableName(), function (Blueprint $table) {
            $table->dropColumn([
                'phone_number',
                'isVerified',
            ]);
        });
    }
}
