<?php
namespace Usecases\Auth;

use Domains\Auth\Interfaces\TokenServiceInterface;
class CreateApiTokenUsecase {
    public function __construct(
        private TokenServiceInterface $tokenServiceInterface
    ) {}

    public function execute(string $userID, string $name = 'api-token'): string {
        return $this->tokenServiceInterface->createToken($userID, $name);
    }
}