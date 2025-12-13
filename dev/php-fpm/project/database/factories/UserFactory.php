<?php

namespace Database\Factories;

use Models\UserModel;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected $model = UserModel::class;

    protected static ?string $password;

    public function definition(): array
    {
        return [
            'username' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'role' => 0,
            'password' => static::$password ??= Hash::make('password'),
            'timezone_offset' => Config::get('timezones.central.offSet'),
            'remember_token' => Str::random(10),
        ];
    }

    public function configure(): static {
        return $this->afterCreating(function (UserModel $user) {
            if (! $user->balance()->exists() ) {
                $user->balance()->create([
                    'amount' => 0
                ]);
            }

            if (! $user->cart()->exists() ) {
                $user->cart()->create([
                    'item_count' => 0
                ]);
            }
        });
    } 
}
