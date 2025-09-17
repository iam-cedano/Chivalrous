<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Ports\SmmProvider\GetServicesPort;
use Infrastructure\SmmProvider\MorethanPanel\GetServicesAdapter;

class PortsProvider extends ServiceProvider {
    // public $bindings = [
    //     \App\Ports\SmmProvider\GetServicesPort::class => \Infrastructure\SmmProvider\MorethanPanel\GetServicesAdapter::class,
    // ];

    public function register() {

        $this->app->bind(GetServicesPort::class, function() {
            $request = $this->app->make('request');

            return $this->app->make(GetServicesAdapter::class);
        });
    }

    public function boot() {
    }
}