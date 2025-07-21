<?php

namespace App\Providers;

use App\Repositories\Interfaces\SmmProviderRepositoryInterface;
use App\Repositories\SmmProviderRepository;
use Illuminate\Support\ServiceProvider;

class SmmProviderProvider extends ServiceProvider
{
    public $bindings = [
        SmmProviderRepositoryInterface::class => SmmProviderRepository::class
    ];
    /**
     * Register services.
     */
    public function register(): void
    {
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
