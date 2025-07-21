<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SmmProvider>
 */
class SmmProviderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'Simple SMMPanel',
            'description' => 'Simple SMM Panel',
            'image' => 'assets/simple-smm-panel-logo.jpg'
        ];
    }
}
