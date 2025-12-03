<?php

namespace Infra\Auth;

use App\Models\UserModel;
use Domains\Auth\Interfaces\SessionServiceInterface;
use Domains\User\UserDomain;
use Domains\User\UserDto;
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