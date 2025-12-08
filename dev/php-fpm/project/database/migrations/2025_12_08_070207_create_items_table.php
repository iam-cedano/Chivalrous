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
        Schema::create('items', function (Blueprint $table) {
            $table->id();

            $table->foreignId('order_id')
                  ->constrained('orders', 'id', 'fk_order_id_01');
            
            $table->foreignId('service_id')
                  ->constrained('services', 'id', 'fk_service_id_03');

            $table->unsignedInteger('quantity');

            $table->decimal('amount', 7, 2);
            $table->string('username', 100)->nullable();
            $table->string('url', 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
