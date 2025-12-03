<?php

namespace Infra\Auth;

use Domains\Auth\Interfaces\AuthServiceInterface;
use Domains\Auth\DTOs\LoginResponseDto;

class RestBasedAuthService implements AuthServiceInterface {
    public function login(): LoginResponseDto {
        return new LoginResponseDto(400, 'RestBasedAuthentication');
    }
}