<?php

namespace Database\Factories;

use Models\SmmPanelModel;
use Illuminate\Database\Eloquent\Factories\Factory;

class SmmPanelFactory extends Factory
{

    protected $model = SmmPanelModel::class;

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
