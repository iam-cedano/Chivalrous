<?php

namespace App\Providers;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\UserController;
use App\Usecases\Auth\CreateApiTokenUsecase;
use App\Usecases\Auth\LoginUsecase;
use App\Usecases\Services\BrowseServicesUsecase;
use App\Usecases\Services\SearchServicesUsecase;
use App\Usecases\Services\GetServiceDetailsUsecase;
use App\Usecases\Users\GetUserUsecase;
use Domain\Auth\Interfaces\AuthServiceInterface;
use App\Usecases\Auth\GetCurrentUserUsecase;
use Domain\Auth\Interfaces\SessionServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use Infrastructure\Auth\FormBasedAuthService;
use Infrastructure\Auth\SanctumTokenService;
use Infrastructure\Auth\SessionService;
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
        
        $this->app->when(UserController::class)
        ->needs(CreateApiTokenUsecase::class)
        ->give(function () {
            return new CreateApiTokenUsecase(
                $this->app->make(SanctumTokenService::class)
            );
        });

        $this->app->when(AuthController::class)
        ->needs(LoginUsecase::class)
        ->give(function() {
            return new LoginUsecase($this->app->make(FormBasedAuthService::class)); 
        });

        $this->app->singleton(SessionServiceInterface::class, SessionService::class);
    }

    public function boot() {
    }
}