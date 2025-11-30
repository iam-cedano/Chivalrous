<?php

namespace Database\Seeders;

use Illuminate\Database\Eloquent\Factories\Sequence;
use App\Models\SmmPanelModel as SmmPanel;
use Illuminate\Database\Seeder;

class SmmPanelSeeder extends Seeder
{
    public function run(): void
    {
       $panels = SmmPanel::factory()->count(2)->state(new Sequence(
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

        $apiKeysPerPanel = [
            'Morethanpanel' => [
                [
                    'api_key' => env('MORETHANPANEL_API_KEY_1', 'api-key-for-morethanpanel'),
                    'order' => 1
                ],
                [
                    'api_key' => env('MORETHANPANEL_API_KEY_2', 'api-key-for-morethanpanel'),
                    'order' => 2
                ]
            ],
            'Smmfollows' => [
                [
                    'api_key' => env('SMMFOLLOWS_API_KEY_1', 'api-key-for-smmfollows'),
                    'order' => 1
                ]
            ]
        ];

        $panels->each(function (SmmPanel $smmPanel) use($apiKeysPerPanel) {
            $name = $smmPanel->name;

            if (! isset($apiKeysPerPanel[$name]) ) {
                return;
            }

            $smmPanel->apiKey()->createMany($apiKeysPerPanel[$name]);
        });
    }
}
