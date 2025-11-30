<?php

namespace Domain\Auth\DTOs;

class LoginResponseDto {
    private int $code;
    private string $message;
    private string $redirect;

    public function __construct(int $code, string $message)
    {
        $this->code = $code;
        $this->message = $message;
        $this->redirect = '';
    }

    public function getCode(): int
    {
        return $this->code;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function getRedirect(): string {
        return $this->redirect;
    }

    public function setRedirect(string $redirect): void 
    {
        $this->redirect = $redirect;
    }

    public function toArray(): array
    {
        $data = [
            'code' => $this->getCode(),
            'message' => $this->getMessage()
        ];
        
        if (! empty($this->getRedirect()) ) {
            $data['redirect'] = $this->getRedirect();
        }

        return $data;
    }

    public function toJSON(): string
    {
        return json_encode($this->toArray());
    }

}