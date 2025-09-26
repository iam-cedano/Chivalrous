<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\SmmProvider;
use Illuminate\Database\Seeder;

class SmmProviderSeeder extends Seeder
{
    public function run(): void
    {
        SmmProvider::factory()->createMany([
        [
            'name' => 'MorethanPanel',
            'url' => 'https://morethanpanel.com/',
            'description' => 'MorethanPanel has been the leading SMM panel in the 
            last 5 years and trusted by thousands of people since 2020. 
            We offer Best & Cheapest SMM Panel services ...',
            'image' => 'assets/morethanpanel-logo.png'
        ], 
        [
            'name' => 'SMMPakPanel',
            'url' => 'https://smmpakpanel.com/',
            'description' => 'Smmpakpanel is one of India\'s leading social media panel companies, 
            renowned for providing the most affordable priced and effective SMM services. 
            Whether you ..',
            'image' => 'assets/smmpakpanel-logo.png'
        ],
        [
            'name' => 'SMMFollows',
            'url' => 'https://smmfollows.com/',
            'description' => 'SmmFollows is a top provider of SMM panels worldwide. 
            You can buy SMM Panel Services using many payment methods. 
            This includes Credit card / Debit card, USDT / ...',
            'image' => 'assets/smmfollows-logo.webp'
        ]
     ]);
    }
}
