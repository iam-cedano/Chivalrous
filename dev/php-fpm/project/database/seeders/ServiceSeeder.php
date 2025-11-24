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
            Best service for Instagram Followers, make your profile remembered for the number of followers you will have!
            There are no risks, so buy our service and be the superstar ⭐ in your city.
        ",
          'minimum_quantity' => '50',
          'maximum_quantity' => '10000000'
        ],
        [
          'name' => 'Facebook Followers',
          'short_description' => 'Lifetime guaranteed | Delivering in 24 hours',
          'long_description' => "🌴 Facebook Followers Service 
           Tired of being invisible in the eyes of others?
            Buy these followers and fake your followers, they will think that you're famous, you will be the envy in your city!
        ",
          'minimum_quantity' => '5',
          'maximum_quantity' => '1000'
        ],
        [
          'name' => 'TikTok Followers',
          'short_description' => 'Lifetime guaranteed | Delivering in 48 hours',
          'long_description' => "🌴 TikTok Followers Service
            TikTok is the \"thing\" of today.
            So, having follower is a must-need, a discussion isn't neccesary. So standout with these followers and create a whole
            empire!
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
        'name' => '🌟 Premium',
        'price_per_thousand' => 54,
        'warranty' => -1,
        'warranty_text' => '🌟 Lifetime',
        'status' => 1,
        ],
        [
        'country_abbreviation' => 'USA',
        'name' => '🤖 Bots',
        'price_per_thousand' => 23,
        'warranty' => 0,
        'warranty_text' => '😢 Lifetime',
        'status' => 1
        ]
      ],
      'Facebook Followers' => [
        [
        'country_abbreviation' => 'USA',
        'name' => '🌟 Premium',
        'price_per_thousand' => 74,
        'warranty' => 0,
        'warranty_text' => '😢 No warranty',
        'status' => 1
        ],
        [
        'country_abbreviation' => 'USA',
        'name' => '🤖 Bots',
        'price_per_thousand' => 42,
        'warranty' => -1,
        'warranty_text' => '🌟 Lifetime',
        'status' => 1
        ],
      ],
      'TikTok Followers' => [
        [
        'country_abbreviation' => 'MEX',
        'name' => '🤖 Bots',
        'price_per_thousand' => 100,
        'warranty' => 60,
        'warranty_text' => '😊 60 days ',
        'status' => 1
        ],
        [
        'country_abbreviation' => 'USA',
        'name' => '🤖 Bots',
        'price_per_thousand' => 150,
        'warranty' => 120,
        'warranty_text' => '😲 120 days',
        'status' => 1
        ],
      ]
     ];

     $detailsPerService = [
      'Instagram Followers' => [
        [
          'content' => '⏰ Delivering in 24-72h',
        ],
        [
          'content' => '👤 Profile must be public'
        ],
        [
          'content' => '🌟 Star Service'
        ]
      ],
      'Facebook Followers' => [
        [
          'content' => '⏰ Delivering in 24-72h'
        ]
      ],
      'TikTok Followers' => [
        [
          'content' => '⏰ Delivering in 24h'
        ],
        [
          'content' => '👤 Profile must be public'
        ]
      ]
     ];

     $services->each(function(Service $service) use($sourcesPerService, $detailsPerService) {
        $name = $service->name;

        if ($sourcesPerService[$name] ) {
          $service->sources()->createMany($sourcesPerService[$name]);
        }

        if ($detailsPerService[$name]) {
          $service->details()->createMany($detailsPerService[$name]);
        }
     });
    }
}
