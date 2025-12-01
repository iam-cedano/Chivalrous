<?php

namespace App\Usecases\User;

use Domain\User\Interfaces\UserServiceInterface;
use Domain\User\UserDto;

class GetCurrentUserUsecase {
    public function __construct(
        private UserServiceInterface $userServiceInterface
    ) {}

    public function execute(): UserDto {
        return $this->userServiceInterface->getCurrentUser();
    }
}