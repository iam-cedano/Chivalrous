<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

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
            'name' => 'Oscar Cedano',
            'email' => 'cedano@engineer.com',
            'password' => 'engineer123'
        ],
        [
            'name' => 'Jhon Doe',
            'email' => 'jhon_doe@gmail.com',
            'password' => 'jhon123'
        ]]
    );
    }
}
