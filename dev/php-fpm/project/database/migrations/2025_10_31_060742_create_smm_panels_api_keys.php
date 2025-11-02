<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('smm_panels_api_keys', function (Blueprint $table) {
            $table->id();
            $table->foreignId('smm_panel_id')->constrained('smm_panels', 'id', 'fk_smm_panel_id_02');
            $table->string('api_key', 255)->unique();
            $table->unsignedInteger('order')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('smm_panels_api_keys');
    }
};
