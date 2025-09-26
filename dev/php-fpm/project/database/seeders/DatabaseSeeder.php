<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function __construct(
        private UserSeeder $userSeeder,
        private SmmProviderSeeder $smmProviderSeeder,
    ) {}

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->smmProviderSeeder->run();
        $this->userSeeder->run();
    }
}
