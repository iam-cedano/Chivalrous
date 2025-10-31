<?php

namespace Database\Seeders;

use App\Models\SmmPanel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class SmmPanelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SmmPanel::factory()->count(2)->state(new Sequence(
  [
                 'name' => 'Morethanpanel',
                 'url' => 'https://morethanpanel.com/',
                 'api_url' => 'https://morethanpanel.com/api/v2',
                 'logo_uri' => '/logos/morethanpanel.webp'
            ],
            [
                'name' => 'Smmfollows',
                'url' => 'https://smmfollows.com/api',
                'api_url' => 'https://smmfollows.com/api/v2',
                'logo_uri' => '/logos/smmfollows.webp'
            ]
            ))->create();
    }
}
