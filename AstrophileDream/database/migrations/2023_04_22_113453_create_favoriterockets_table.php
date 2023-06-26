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
        Schema::create('favoriterockets', function (Blueprint $table) {
            $table->id();
            $table->unique(['userId', 'rocketId']);
            $table->bigInteger('userId');
            $table->integer('rocketId');
            $table->timestamps();
            $table->foreign('userId')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('rocketId')->references('rocketId')->on('rockets')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('favoriterockets');
    }
};
