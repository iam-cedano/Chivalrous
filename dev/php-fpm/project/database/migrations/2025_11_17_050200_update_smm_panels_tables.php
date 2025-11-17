<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->string('banner_uri', 60);
            $table->string('logo_uri', 60)->change();
        });

        Schema::table('service_providers', function (Blueprint $table) {
            $table->dropForeign('fk_service_id_01');
            $table->integer('service_id')->change();
            
            $table->unique(['smm_panel_id', 'service_id']);
            $table->decimal('price_per_thousand', 7, 2)->nullable();

        });

        Schema::create('source_services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->constrained('services', 'id', 'fk_services_id_01');

            $table->char('country_abbreviation', 3);

            $table->string('quality', 60);
            $table->decimal('price_per_thousand', 7, 2);
            $table->tinyInteger('status', unsigned: true)->default(1);
       
            $table->timestamps();
        });

        Schema::create('providers_services', function (Blueprint $table) {
            $table->id();

            $table->foreignId('service_provider_id')->constrained('service_providers', 'id', 'fk_service_provider_01');
            $table->foreignId('source_service_id')->constrained('source_services', 'id', 'fk_source_service_01');

            $table->tinyInteger('order', unsigned: true)->default(1);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('source_services');

        Schema::table('service_providers', function (Blueprint $table) {
            $table->dropUnique('service_providers_smm_panel_id_service_id_unique');
            $table->dropColumn('price_per_thousand');
            $table->unsignedBigInteger('service_id')->change();
        });

        Schema::table('services', function (Blueprint $table) {
            $table->string('logo_uri', 255)->change();
            $table->dropColumn('banner_uri');
        });
    }
};
