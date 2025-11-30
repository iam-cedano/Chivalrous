<?php

namespace App\Usecases\Auth;

use Domain\Auth\Interfaces\AuthServiceInterface;
use Domain\Auth\DTOs\LoginResponseDto;

class LoginUsecase {

    public function __construct(
        private AuthServiceInterface $authServiceInterface,
    ) {}

    public function execute(): LoginResponseDto {
        return $this->authServiceInterface->login();
    }
}