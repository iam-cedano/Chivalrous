<?php

namespace Usecases\User;

use Domains\User\Interfaces\UserServiceInterface;
use Domains\User\UserDto;

class GetCurrentUserUsecase {
    public function __construct(
        private UserServiceInterface $userServiceInterface
    ) {}

    public function execute(): UserDto {
        return $this->userServiceInterface->getCurrentUser();
    }
}