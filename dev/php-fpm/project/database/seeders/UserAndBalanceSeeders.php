<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;

class UserAndBalanceSeeders extends Seeder
{

    public function run(): void
    {
      User::factory()
            ->count(2)
            ->state(new Sequence(
                [
                    'username' => 'Oscar Cedano',
                    'email' => 'cedano@engineer.com',
                    'password' => 'engineer123',
                    'role' => Config::get('constants.roles.client'),
                    'language' => Config::get('constants.languages.en'),
                    'timezone_offset' => Config::get('timezones.mountain.offSet'),
                ],
                [
                    'username' => 'Jhon Doe',
                    'email' => 'jhon_doe@gmail.com',
                    'password' => 'jhon123',
                    'role' => Config::get('constants.roles.admin'),
                    'language' => Config::get('constants.languages.en'),
                    'timezone_offset' => Config::get('timezones.mountain.offSet'),
                ],
            ))
          ->create();
    }
}
