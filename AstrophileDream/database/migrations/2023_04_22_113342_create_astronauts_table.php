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
        Schema::create('astronauts', function (Blueprint $table) {
            $table->integer('astronautId')->autoIncrement();
            $table->string('firstName');
            $table->string('lastName');
            $table->string('position');
            $table->string('rank');
            $table->string('timeInSpace');
            $table->integer('numberOfMissions');
            $table->string('missions');
            $table->string('education');
            $table->integer('yearsActive');
            $table->string('status');
            $table->string('astronautImage')->nullable();
            $table->text('astronautDescription');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('astronauts');
    }
};
