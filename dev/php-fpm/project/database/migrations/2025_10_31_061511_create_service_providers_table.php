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
        Schema::create('service_providers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->constrained('services', 'id', 'fk_service_id_01');
            $table->foreignId('smm_panel_id')->constrained('smm_panels', 'id', 'fk_smm_panel_id_01');

            $table->unsignedInteger('status')->default(1);
            $table->unsignedInteger('minimum_quantity')->nullable();
            $table->unsignedInteger('maximum_quantity')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists(table: 'providers_services');
        Schema::dropIfExists('service_providers');
    }
};
