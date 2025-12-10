<?php

namespace Domains\User\Interfaces;

use Http\Requests\CreateUserRequest;
use Domains\User\DTOs\UserDto;

interface UserServiceInterface {
    public function getCurrentUser(): UserDto;
    public function getUser(string $id): UserDto;
    public function createUser(CreateUserRequest $request): UserDto;
}