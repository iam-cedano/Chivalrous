<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Service::factory()->count(2)->state(new Sequence(
[
            'name' => 'Instagram Followers',
            'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 12-24 hours',
            'long_description' => "
            🌴 Instagram Video View Service \n 

            🌎 Geo: Global \n
             ⏲ Start Time: 0-6h \n
             ⬆ Min - Max: 50 - 10,000,000 \n
             
             ⚠ The profile must be set on 'public' or the order won't start. After the
            ",
            'logo_uri' => '/logos/instagram.webp',
            'minimum_quantity' => '0',
            'maximum_quantity' => '10000000' 
          ],
          [
            'name' => 'Facebook Followers',
            'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 24 hours',
            'long_description' => "
            🌴 Instagram Video View Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 0-6h \n
            ⬆ Min - Max: 5 - 1000 \n
             
             ⚠ The profile must be set on 'public' or the order won't start. After the
            ",
            'logo_uri' => '/logos/facebook.webp',
            'minimum_quantity' => '5',
            'maximum_quantity' => '1000'
          ]
       )
     )->create();
    }
}
