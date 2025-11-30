<?php

namespace Domain\User;

use App\Models\UserModel;

class UserDomain {

    private UserDto $userDto;

    public function __construct(UserModel $userModel)
    {
        $this->userDto = new UserDto(
            $userModel->id,
            $userModel->username,
            $userModel->email,
            $userModel->role
        );
    }

    public function getId(): string
    {
        return $this->userDto->getId();
    }

    public function getUsername(): string
    {
        return $this->userDto->getUsername();
    }

    public function getEmail(): string
    {
        return $this->userDto->getEmail();
    }

    public function getRole(): int
    {
        return $this->userDto->getRole();
    }
}