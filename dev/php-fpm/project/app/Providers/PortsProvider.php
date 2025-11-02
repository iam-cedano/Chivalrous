<?php

namespace App\Providers;

use App\Http\Controllers\ServicesController;
use App\Usecases\Services\GetServicesUsecase;
use Illuminate\Support\ServiceProvider;
use Infrastructure\Services\ServiceLocalAdapter;

class PortsProvider extends ServiceProvider {
    public function register() {
        
        $this->app->when(ServicesController::class)
        ->needs(GetServicesUsecase::class)
        ->give( function() {
            return new GetServicesUsecase($this->app->make(ServiceLocalAdapter::class));
        });
    }

    public function boot() {
    }
}