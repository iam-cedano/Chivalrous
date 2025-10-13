<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class UserFactory extends Factory
{
    protected $model = User::class;

    protected static ?string $password;

    public function definition(): array
    {
        return [
            'id' => uuid_create(),
            'username' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'password' => static::$password ??= Hash::make('password'),
            'timezone_offset' => Config::get('timezones.central.offSet'),
            'language' => Config::get('constants.languages.en'),
            'remember_token' => Str::random(10),
        ];
    }

    public function configure(): static {
        return $this->afterCreating(function (User $user) {
            if ( !$user->balance()->exists() ) {
                $user->balance()->create([
                    'amount' => 0
                ]);
            }
        });
    } 
}
