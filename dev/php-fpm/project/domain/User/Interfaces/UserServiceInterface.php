<?php

namespace Domain\User\Interfaces;

use Domain\User\UserDto;

interface UserServiceInterface {
    public function getCurrentUser(): UserDto;
    public function getUser(string $id): UserDto;
}