<?php

namespace Domains\Auth\DTOs;

class FormRequestDto {
    private string $username;
    private string $password;
    public function __construct(string $username, string $password)
    {
        $this->username = $username;
        $this->password = $password;
    }

    public static function fromArray(array $data): self
    {
        $username = isset($data['username']) ? (string) $data['username'] : '';
        $password = isset($data['password']) ? (string) $data['password'] : '';
        return new self($username, $password);
    }

    public function getUsername(): string
    {
        return $this->username;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function toArray(): array
    {
        return [
            'username' => $this->username,
            'password' => $this->password,
        ];
    }
}
