<?php

namespace Domains\Auth\DTOs;

class LoginResponseDto {
    private int $code;
    private string $message;
    private ?string $role = null;

    public function __construct(int $code, string $message)
    {
        $this->code = $code;
        $this->message = $message;
    }

    public function getCode(): int
    {
        return $this->code;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function getRole(): ?string {
        return $this->role;
    }

    public function setRole(string $role): void 
    {
        $this->role = $role;
    }

    public function toArray(): array
    {
        $data = [
            'code' => $this->getCode(),
            'message' => $this->getMessage()
        ];
        
        if ($this->getRole() !== null) {
            $data['role'] = $this->getRole();
        }

        return $data;
    }

    public function toJSON(): string
    {
        return json_encode($this->toArray());
    }

}