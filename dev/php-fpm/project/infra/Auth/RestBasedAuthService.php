<?php

namespace Infrastructure\Auth;

use Domain\Auth\Interfaces\AuthServiceInterface;
use Domain\Auth\DTOs\LoginResponseDto;

class RestBasedAuthService implements AuthServiceInterface {
    public function login(): LoginResponseDto {
        return new LoginResponseDto(400, 'RestBasedAuthentication');
    }
}