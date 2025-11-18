<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::table('service_providers', function (Blueprint $table) {
           $table->dropColumn('price_per_thousand'); 

           $table->decimal('price_per_thousand', 7, 2)->after('status')->nullable();
        });
    }

 
    public function down(): void
    {
    }
};
