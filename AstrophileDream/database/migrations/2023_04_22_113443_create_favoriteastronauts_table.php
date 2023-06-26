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
        Schema::create('favoriteastronauts', function (Blueprint $table) {
            $table->id();
            $table->unique(['userId', 'astronautId']);
            $table->bigInteger('userId');
            $table->integer('astronautId');
            $table->timestamps();
            $table->foreign('userId')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('astronautId')->references('astronautId')->on('astronauts')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('favoriteastronauts');
    }
};
