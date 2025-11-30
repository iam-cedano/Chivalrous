<?php

namespace Domain\User;

use Domain\DTO;

class UserDto extends DTO {
    private string $id;
    private string $username;
    private string $email;
    private int $role;

    public function __construct(string $id, string $username, string $email, int $role)
    {
        $this->id = $id;
        $this->username = $username;
        $this->email = $email;
        $this->role = $role;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getUsername(): string
    {
        return $this->username;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getRole(): int
    {
        return $this->role;
    }

    public static function fromDomain(UserDomain $user): self
    {
        return new self(
            $user->getId(),
            $user->getUsername(),
            $user->getEmail(),
            $user->getRole()
        );
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'email' => $this->email,
            'role' => $this->role,
        ];
    }

    public function toJSON(): string
    {
        return json_encode($this->toArray());
    }
}
