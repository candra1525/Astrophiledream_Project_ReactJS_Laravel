<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rockets', function (Blueprint $table) {
            $table->integer('rocketId')->autoIncrement();
            $table->string('rocketName');
            $table->string('type');
            $table->string('placeOfOrigin');
            $table->string('rocketMissions');
            $table->string('usedBy');
            $table->string('manufracture');
            $table->string('launchSites');
            $table->integer('totalLaunch');
            $table->date('firstFlight');
            $table->date('lastFlight');
            $table->string('status');
            $table->string('rocketImage')->nullable();
            $table->text('rocketDescription');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rockets');
    }
};
