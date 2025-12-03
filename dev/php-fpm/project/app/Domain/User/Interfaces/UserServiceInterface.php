<?php

namespace Domains\User\Interfaces;

use Domains\User\UserDto;

interface UserServiceInterface {
    public function getCurrentUser(): UserDto;
    public function getUser(string $id): UserDto;
}