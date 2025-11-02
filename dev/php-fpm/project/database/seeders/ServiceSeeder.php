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
        Service::factory()->count(20)->state(new Sequence(
        [
          'name' => 'Instagram Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 12-24 hours',
          'long_description' => "
            🌴 Instagram Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 0-6h \n
            ⬆ Min - Max: 50 - 10,000,000 \n
             
            ⚠ The profile must be set on 'public' or the order won't start. After the order starts, avoid changing the username until completion.
        ",
          'logo_uri' => '/logos/instagram.webp',
          'minimum_quantity' => '50',
          'maximum_quantity' => '10000000'
        ],
        [
          'name' => 'Facebook Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 24 hours',
          'long_description' => "
            🌴 Facebook Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 0-12h \n
            ⬆ Min - Max: 5 - 1,000 \n
             
            ⚠ The profile must be set on 'public' or the order won't start. After the order starts, avoid changing the username until completion.
        ",
          'logo_uri' => '/logos/facebook.webp',
          'minimum_quantity' => '5',
          'maximum_quantity' => '1000'
        ],
        [
          'name' => 'TikTok Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 6-24 hours',
          'long_description' => "
            🌴 TikTok Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 0-6h \n
            ⬆ Min - Max: 100 - 1,000,000 \n
             
            ⚠ The profile must be set on 'public' or the order won't start. After the order starts, avoid changing the username until completion.
        ",
          'logo_uri' => '/logos/tiktok.webp',
          'minimum_quantity' => '100',
          'maximum_quantity' => '1000000'
        ],
        [
          'name' => 'X (Twitter) Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 12-48 hours',
          'long_description' => "
            🌴 X (Twitter) Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 0-12h \n
            ⬆ Min - Max: 50 - 1,000,000 \n
             
            ⚠ The profile must be set on 'public' or the order won't start. After the order starts, avoid changing the username until completion.
        ",
          'logo_uri' => '/logos/x.webp',
          'minimum_quantity' => '50',
          'maximum_quantity' => '1000000'
        ],
        [
          'name' => 'YouTube Subscribers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 24-72 hours',
          'long_description' => "
            🌴 YouTube Subscribers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 12-24h \n
            ⬆ Min - Max: 100 - 500,000 \n
             
            ⚠ The channel must be public and region-unrestricted. Do not change the channel name/URL during delivery.
        ",
          'logo_uri' => '/logos/youtube.webp',
          'minimum_quantity' => '100',
          'maximum_quantity' => '500000'
        ],
        [
          'name' => 'LinkedIn Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 24-72 hours',
          'long_description' => "
            🌴 LinkedIn Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 12-48h \n
            ⬆ Min - Max: 50 - 500,000 \n
             
            ⚠ The profile/page must be public. Avoid edits to the URL or visibility settings during processing.
        ",
          'logo_uri' => '/logos/linkedin.webp',
          'minimum_quantity' => '50',
          'maximum_quantity' => '500000'
        ],
        [
          'name' => 'Snapchat Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 6-24 hours',
          'long_description' => "
            🌴 Snapchat Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 0-24h \n
            ⬆ Min - Max: 50 - 500,000 \n
             
            ⚠ Ensure your profile is discoverable and not restricted. Do not switch to private during delivery.
        ",
          'logo_uri' => '/logos/snapchat.webp',
          'minimum_quantity' => '50',
          'maximum_quantity' => '500000'
        ],
        [
          'name' => 'Pinterest Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 12-48 hours',
          'long_description' => "
            🌴 Pinterest Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 6-24h \n
            ⬆ Min - Max: 50 - 500,000 \n
             
            ⚠ The account must be public. Avoid changing the username while the order is active.
        ",
          'logo_uri' => '/logos/pinterest.webp',
          'minimum_quantity' => '50',
          'maximum_quantity' => '500000'
        ],
        [
          'name' => 'Telegram Members',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 0-24 hours',
          'long_description' => "
            🌴 Telegram Members Service (Groups/Channels) \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 0-6h \n
            ⬆ Min - Max: 50 - 200,000 \n
             
            ⚠ The group/channel must be public or have a join link. Disable join approvals during delivery.
        ",
          'logo_uri' => '/logos/telegram.webp',
          'minimum_quantity' => '50',
          'maximum_quantity' => '200000'
        ],
        [
          'name' => 'Twitch Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 6-24 hours',
          'long_description' => "
            🌴 Twitch Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 0-12h \n
            ⬆ Min - Max: 25 - 1,000,000 \n
             
            ⚠ Keep the channel public and avoid username changes until completion.
        ",
          'logo_uri' => '/logos/twitch.webp',
          'minimum_quantity' => '25',
          'maximum_quantity' => '1000000'
        ],
        [
          'name' => 'Reddit Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 12-48 hours',
          'long_description' => "
            🌴 Reddit Followers (Profile) Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 6-24h \n
            ⬆ Min - Max: 10 - 200,000 \n
             
            ⚠ Ensure the profile is public. No username edits during the order.
        ",
          'logo_uri' => '/logos/reddit.webp',
          'minimum_quantity' => '10',
          'maximum_quantity' => '200000'
        ],
        [
          'name' => 'SoundCloud Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 12-48 hours',
          'long_description' => "
            🌴 SoundCloud Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 6-24h \n
            ⬆ Min - Max: 25 - 500,000 \n
             
            ⚠ Account must be public. Avoid URL or name changes during delivery.
        ",
          'logo_uri' => '/logos/soundcloud.webp',
          'minimum_quantity' => '25',
          'maximum_quantity' => '500000'
        ],
        [
          'name' => 'Spotify Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 24-72 hours',
          'long_description' => "
            🌴 Spotify Followers (Artist/Profile) Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 12-48h \n
            ⬆ Min - Max: 100 - 1,000,000 \n
             
            ⚠ Provide the correct profile/artist URL. Do not modify the URL during fulfillment.
        ",
          'logo_uri' => '/logos/spotify.webp',
          'minimum_quantity' => '100',
          'maximum_quantity' => '1000000'
        ],
        [
          'name' => 'Discord Members',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 0-24 hours',
          'long_description' => "
            🌴 Discord Server Members Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 0-6h \n
            ⬆ Min - Max: 25 - 500,000 \n
             
            ⚠ Provide a permanent invite link without verification/captcha. Disable membership screening during delivery.
        ",
          'logo_uri' => '/logos/discord.webp',
          'minimum_quantity' => '25',
          'maximum_quantity' => '500000'
        ],
        [
          'name' => 'Vimeo Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 24-72 hours',
          'long_description' => "
            🌴 Vimeo Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 12-48h \n
            ⬆ Min - Max: 25 - 200,000 \n
             
            ⚠ Keep the profile public and avoid changes during the order.
        ",
          'logo_uri' => '/logos/vimeo.webp',
          'minimum_quantity' => '25',
          'maximum_quantity' => '200000'
        ],
        [
          'name' => 'Threads Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 6-24 hours',
          'long_description' => "
            🌴 Threads Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 0-6h \n
            ⬆ Min - Max: 50 - 1,000,000 \n
             
            ⚠ The account must be public. Do not change the handle during delivery.
        ",
          'logo_uri' => '/logos/threads.webp',
          'minimum_quantity' => '50',
          'maximum_quantity' => '1000000'
        ],
        [
          'name' => 'Quora Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 24-72 hours',
          'long_description' => "
            🌴 Quora Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 12-48h \n
            ⬆ Min - Max: 25 - 200,000 \n
             
            ⚠ Ensure your profile is public and the URL remains unchanged during fulfillment.
        ",
          'logo_uri' => '/logos/quora.webp',
          'minimum_quantity' => '25',
          'maximum_quantity' => '200000'
        ],
        [
          'name' => 'Medium Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 24-72 hours',
          'long_description' => "
            🌴 Medium Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 12-48h \n
            ⬆ Min - Max: 25 - 200,000 \n
             
            ⚠ Keep the profile public and do not change the username/URL while processing.
        ",
          'logo_uri' => '/logos/medium.webp',
          'minimum_quantity' => '25',
          'maximum_quantity' => '200000'
        ],
        [
          'name' => 'Tumblr Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 12-48 hours',
          'long_description' => "
            🌴 Tumblr Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 6-24h \n
            ⬆ Min - Max: 25 - 500,000 \n
             
            ⚠ The blog must be public. Avoid changing the blog URL during delivery.
        ",
          'logo_uri' => '/logos/tumblr.webp',
          'minimum_quantity' => '25',
          'maximum_quantity' => '500000'
        ],
        [
          'name' => 'VK Followers',
          'short_description' => '🇲🇽 | Lifetime guaranteed | Delivering in 12-48 hours',
          'long_description' => "
            🌴 VK (VKontakte) Followers Service \n 

            🌎 Geo: Global \n
            ⏲ Start Time: 6-24h \n
            ⬆ Min - Max: 50 - 1,000,000 \n
             
            ⚠ Keep the profile/public page accessible. Do not switch privacy settings during the order.
        ",
          'logo_uri' => '/logos/vk.webp',
          'minimum_quantity' => '50',
          'maximum_quantity' => '1000000'
        ]
       )
     )->create();
    }
}
