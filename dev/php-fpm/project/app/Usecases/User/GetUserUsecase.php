<?php

namespace Usecases\User;

use Domains\User\Interfaces\UserServiceInterface;
use Domains\User\DTOs\UserDto;

class GetUserUsecase {
    
    public function __construct(
        private UserServiceInterface $userServiceInterface
    ) {}

    public function execute(string $id): UserDto {
        return $this->userServiceInterface->getUser($id);
    }
}