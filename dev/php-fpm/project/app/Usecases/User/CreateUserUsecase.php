<?php

namespace Usecases\User;

use Http\Requests\CreateUserRequest;
use Domains\User\Interfaces\UserServiceInterface;

class CreateUserUsecase {
    
    public function __construct(
        private UserServiceInterface $userServiceInterface
    ) {}
    
    public function execute(CreateUserRequest $request) {
        return $this->userServiceInterface->createUser($request);
    }
}