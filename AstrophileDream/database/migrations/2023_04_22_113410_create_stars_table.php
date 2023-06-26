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
        Schema::create('stars', function (Blueprint $table) {
            $table->integer('starId')->autoIncrement();
            $table->string('starName');
            $table->string('starConstellation');
            $table->string('starDeclination');
            $table->string('starArea');
            $table->string('starDegreeVisible');
            $table->date('starDateVisible');
            $table->string('starTimeVisible');
            $table->string('starImage')->nullable();
            $table->text('starDescription');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stars');
    }
};
