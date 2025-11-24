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
        Schema::create('service_details', function(Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->constrained('services', 'id', 'fk_service_id_02');
            $table->string('content', 100);
        });

        Schema::table('source_services', function(Blueprint $table) {
            $table->string('additional_information', 100)->nullable();
            $table->tinyInteger('warranty')->default(0);
            $table->string('warranty_text', 50);
            $table->unique(['warranty', 'country_abbreviation', 'service_id']);
        });
    }   

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
