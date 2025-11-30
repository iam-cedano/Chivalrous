<?php

namespace App\Usecases;

use Domain\Auth\LoginResponseDto;
use Domian\Auth\AuthServiceInterface;

class LoginUsecase {

    private function __construct(
        private AuthServiceInterface $authServiceInterface,
    ) {}

    public function execute(): LoginResponseDto {
        return $this->authServiceInterface->login();
    }
}