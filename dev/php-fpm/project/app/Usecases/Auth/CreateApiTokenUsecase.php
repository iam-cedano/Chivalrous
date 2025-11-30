<?php

namespace App\Usecases;

use Domain\Auth\TokenServiceInterface;

class CreateApiTokenUsecase {

    public function __construct(
        private TokenServiceInterface $tokenServiceInterface
    ) {}

    public function execute(int $userID, string $name = 'api-key'): string {
        return $this->tokenServiceInterface->createToken($userID, $name);
    }
}