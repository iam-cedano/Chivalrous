<?php

namespace Usecases\Auth;

use Domains\Auth\Interfaces\AuthServiceInterface;
use Domains\Auth\DTOs\LoginResponseDto;

class LoginUsecase {

    public function __construct(
        private AuthServiceInterface $authServiceInterface,
    ) {}

    public function execute(): LoginResponseDto {
        return $this->authServiceInterface->login();
    }
}