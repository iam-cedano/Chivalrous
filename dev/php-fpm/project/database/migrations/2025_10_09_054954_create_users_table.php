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
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id');

            $table->string('username', 30);
            $table->string('email', 254);    
            $table->string('password', 64);
            $table->tinyInteger('role')->default(0)->unsigned();
            $table->mediumInteger('timezone_offset')->default(0);
            $table->tinyInteger('language')->default(0);
            $table->char('api_key', 32)->default('');

            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();

            $table->unique('username');
            $table->unique('email');

            $table->index('username');
            $table->index('email');

            $table->primary('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
