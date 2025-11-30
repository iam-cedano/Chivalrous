<?php

namespace App\Providers;

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\UserController;
use App\Usecases\Services\BrowseServicesUsecase;
use App\Usecases\Services\SearchServicesUsecase;
use App\Usecases\Services\GetServiceDetailsUsecase;
use App\Usecases\Users\GetUserUsecase;
use Illuminate\Support\ServiceProvider;
use Infrastructure\Local\Services\ServiceLocalAdapter;
use Infrastructure\Local\Users\GetUserAdapter;

class PortsProvider extends ServiceProvider {
    public function register() {
        
        $this->app->when(ServicesController::class)
        ->needs(BrowseServicesUsecase::class)
        ->give(function() {
            return new BrowseServicesUsecase($this->app->make(ServiceLocalAdapter::class));
        });

        $this->app->when(ServicesController::class)
        ->needs(SearchServicesUsecase::class)
        ->give(function() {
            return new SearchServicesUsecase($this->app->make(ServiceLocalAdapter::class));
        });

        $this->app->when(ServicesController::class)
        ->needs(GetServiceDetailsUsecase::class)
        ->give(function() {
            return new GetServiceDetailsUsecase($this->app->make(ServiceLocalAdapter::class));
        });

        $this->app->when(UserController::class)
        ->needs(GetUserUsecase::class)
        ->give(function() {
            return new GetUserUsecase($this->app->make(GetUserAdapter::class));
        });
        
    }

    public function boot() {
    }
}