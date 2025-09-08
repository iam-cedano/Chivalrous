<?php

namespace App;

use Illuminate\Support\ServiceProvider;

class PortsProvider extends ServiceProvider {
    public $bindings = [
        \App\Ports\SmmProvider\GetServicesPort::class => \Infrastructure\SmmProvider\MorethanPanel\GetServicesAdapter::class,
    ];
}