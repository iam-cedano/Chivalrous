<?php

namespace App\Services\Auth;

use App\Services\Auth\Interfaces\AuthenticationStrategy;

class AuthService {
    public function __construct(
        private AuthenticationStrategy $strategy
    ) {

    }

    public function authenticate(array $data): bool {
        return true;
    }
}
