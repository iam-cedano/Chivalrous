<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'Sample Service Name',
            'short_description' => '🇲🇽 | Lifetime Guaranteed | Delivering in 24-72h',
            'long_description' => 'This sample service is for testing-lovers that want more attention from the developers',
            'minimum_quantity' => 0,
            'maximum_quantity' => null
        ];
    }
}
