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
        Schema::table('balances', function(Blueprint $table) {
            $table->decimal('amount', 6, 2)
                  ->after('user_id')
                  ->nullable(false)
                  ->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('balances', function(Blueprint $table) {
            $table->removeColumn('amount');
        });
    }
};
