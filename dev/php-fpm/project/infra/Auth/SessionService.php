<?php

namespace Infrastructure\Auth;

use App\Models\UserModel;
use Domain\Auth\Interfaces\SessionServiceInterface;
use Domain\User\UserDomain;
use Domain\User\UserDto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SessionService implements SessionServiceInterface {

    public function __construct(
        private Request $request
    ) {}

    public function isLogged(): bool {
        return Auth::guard()->check();
    }
}