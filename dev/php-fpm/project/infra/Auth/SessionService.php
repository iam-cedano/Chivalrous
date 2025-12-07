<?php

namespace Infra\Auth;

use Domains\Auth\Interfaces\SessionServiceInterface;
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