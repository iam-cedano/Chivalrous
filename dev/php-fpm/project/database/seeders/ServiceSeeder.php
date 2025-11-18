<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
       $services = Service::factory()->count(3)->state(new Sequence(
        [
          'name' => 'Instagram Followers',
          'short_description' => 'Lifetime guaranteed | Delivering in 12-24 hours',
          'long_description' => "🌴 Instagram Followers Service
            🌎 Geo: Global
            ⏲ Start Time: 0-6h
            ⬆ Min - Max: 50 - 10,000,000
            
            ⚠ The profile must be set on 'public' or the order won't start. After the order starts, avoid changing the username until completion.
        ",
          'minimum_quantity' => '50',
          'maximum_quantity' => '10000000'
        ],
        [
          'name' => 'Facebook Followers',
          'short_description' => 'Lifetime guaranteed | Delivering in 24 hours',
          'long_description' => "🌴 Facebook Followers Service 
            🌎 Geo: Global
            ⏲ Start Time: 0-12h
            ⬆ Min - Max: 5 - 1,000
            
            ⚠ The profile must be set on 'public' or the order won't start. After the order starts, avoid changing the username until completion.
        ",
          'minimum_quantity' => '5',
          'maximum_quantity' => '1000'
        ],
        [
          'name' => 'TikTok Followers',
          'short_description' => 'Lifetime guaranteed | Delivering in 48 hours',
          'long_description' => "🌴 TikTok Followers Service
            🌎 Geo: Global 
            ⏲ Start Time: 0-12h
            ⬆ Min - Max: 5 - 1,000
             
            ⚠ The profile must be set on 'public' or the order won't start. After the order starts, avoid changing the username until completion.
        ",
          'minimum_quantity' => '5',
          'maximum_quantity' => '1000'
        ],
       )
     )->create();

     $sourcesPerService = [
      'Instagram Followers' => [
        [
        'country_abbreviation' => 'MEX',
        'quality' => '🌟 Premium',
        'price_per_thousand' => 54,
        'status' => 1
        ],
        [
        'country_abbreviation' => 'MEX',
        'quality' => '🤖 Bots',
        'price_per_thousand' => 23,
        'status' => 1
        ]
      ],
      'Facebook Followers' => [
        [
        'country_abbreviation' => 'USA',
        'quality' => '🌟 Premium',
        'price_per_thousand' => 74,
        'status' => 1
        ],
        [
        'country_abbreviation' => 'USA',
        'quality' => '🤖 Bots',
        'price_per_thousand' => 42,
        'status' => 1
        ],
      ],
      'TikTok Followers' => [
        [
        'country_abbreviation' => 'MEX',
        'quality' => '🌟 Bots',
        'price_per_thousand' => 100,
        'status' => 1
        ],
        [
        'country_abbreviation' => 'USA',
        'quality' => '🤖 Bots',
        'price_per_thousand' => 150,
        'status' => 1
        ],
      ]
     ];

     $services->each(function(Service $service) use($sourcesPerService) {
        $name = $service->name;

        if (! $sourcesPerService[$name] ) {
          return;
        }

        $service->sources()->createMany($sourcesPerService[$name]);
     });
    }
}
