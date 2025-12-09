<?php
namespace Providers;

use Models\UserModel as User;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AuthProvider extends ServiceProvider
{
    public function boot(): void
    {
        Gate::define('access-admin-dashboard', function(User $user): Response {
            switch ($user->role) {
                case Config::get('constants.USER'):
                    return Response::deny('Users aren\'t authorized to perform this action.');
                case Config::get('constants.ADMIN'): 
                    return Response::allow();
            }

            return Response::deny('User\'s role is unknown.');
        });
    }
}
