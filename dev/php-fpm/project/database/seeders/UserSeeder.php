<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * 
     * @return void
     */
    public function run(): void
    {
        User::factory()->createMany([[
            'role' => Config::get('constants.USER'),
            'name' => 'Oscar Cedano',
            'email' => 'cedano@engineer.com',
            'password' => 'engineer123'
        ],
        [
            'role' => Config::get('constants.ADMIN'),
            'name' => 'Jhon Doe',
            'email' => 'jhon_doe@gmail.com',
            'password' => 'jhon123'
        ]]
    );
    }
}
