<?php

namespace Database\Factories;

use App\Models\SmmPanel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SmmPanel>
 */
class SmmPanelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'BestPanel',
            'url' => 'https://bestpanel.com',
            'api_url' => 'https://bestpanel.com'
        ];
    }
}
