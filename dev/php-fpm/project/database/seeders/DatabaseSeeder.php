<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserAndBalanceSeeders::class,
            ServiceSeeder::class,
            SmmPanelSeeder::class
        ]);
    }
}
