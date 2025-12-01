<?php

namespace App\Usecases\User;

use Domain\User\Interfaces\UserServiceInterface;
use Domain\User\UserDto;

class GetUserUsecase {
    
    public function __construct(
        private UserServiceInterface $userServiceInterface
    ) {}

    public function execute(string $id): UserDto {
        return $this->userServiceInterface->getUser($id);
    }
}