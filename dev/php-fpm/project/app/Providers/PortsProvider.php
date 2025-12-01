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
use Domain\Auth\Interfaces\SessionServiceInterface;
use Illuminate\Support\ServiceProvider;
use Infrastructure\Auth\FormBasedAuthService;
use Infrastructure\Auth\SanctumTokenService;
use Infrastructure\Auth\SessionService;
use Infrastructure\Local\Services\ServiceLocalAdapter;
use App\Usecases\User\GetUserUsecase;
use App\Usecases\User\GetCurrentUserUsecase;
use Infrastructure\User\UserService;

class PortsProvider extends ServiceProvider {
    public function register() {
        $this->app->singleton(SessionServiceInterface::class, SessionService::class);
        
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
        ->needs(CreateApiTokenUsecase::class)
        ->give(function () {
            return new CreateApiTokenUsecase(
                $this->app->make(SanctumTokenService::class)
            );
        });

        $this->app->when(UserController::class)
        ->needs(GetUserUsecase::class)
        ->give(function () {
            return new GetUserUsecase($this->app->make(UserService::class));
        });

        $this->app->when(UserController::class)
        ->needs(GetCurrentUserUsecase::class)
        ->give(function () {
            return new GetCurrentUserUsecase($this->app->make(UserService::class));
        });

        $this->app->when(AuthController::class)
        ->needs(LoginUsecase::class)
        ->give(function() {
            return new LoginUsecase($this->app->make(FormBasedAuthService::class)); 
        });
    }

    public function boot() {
    }
}