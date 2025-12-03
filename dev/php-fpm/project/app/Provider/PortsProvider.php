<?php
namespace Providers;

use Http\Controllers\AuthController;
use Http\Controllers\ServicesController;
use Http\Controllers\UserController;
use Usecases\Auth\CreateApiTokenUsecase;
use Usecases\Auth\LoginUsecase;
use Usecases\Services\BrowseServicesUsecase;
use Usecases\Services\SearchServicesUsecase;
use Usecases\Services\GetServiceDetailsUsecase;
use Domains\Auth\Interfaces\SessionServiceInterface;
use Illuminate\Support\ServiceProvider;
use Infra\Auth\FormBasedAuthService;
use Infra\Auth\SanctumTokenService;
use Infra\Auth\SessionService;
use Infra\Local\Services\ServiceLocalAdapter;
use Infra\User\UserService;
use Usecases\User\GetUserUsecase;
use Usecases\User\GetCurrentUserUsecase;

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