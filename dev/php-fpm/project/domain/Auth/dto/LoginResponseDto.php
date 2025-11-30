<?php

namespace Domain\Auth;

class LoginResponseDto {
    private int $code;
    private string $message;

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

    public function toArray(): array
    {
        return [
            'code' => $this->code,
            'message' => $this->message,
        ];
    }

    public function toJSON(): string
    {
        return json_encode($this->toArray());
    }

}