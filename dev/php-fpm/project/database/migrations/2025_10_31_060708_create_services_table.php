<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('short_description', 60);
            $table->text('long_description');
            $table->string('logo_uri', 255);
            $table->unsignedInteger('minimum_quantity');
            $table->unsignedInteger('maximum_quantity')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
