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
        Schema::create('planets', function (Blueprint $table) {
            $table->integer('planetId')->autoIncrement();
            $table->string('planetName');
            $table->string('planetAlternativeName');
            $table->string('planetSurfaceArea');
            $table->string('planetVolume');
            $table->string('planetMass');
            $table->string('planetGravity');
            $table->string('planetImage')->nullable();
            $table->text('planetDescription');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('planets');
    }
};
