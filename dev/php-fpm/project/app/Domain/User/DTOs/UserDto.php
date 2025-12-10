<?php
namespace Domains\User\DTOs;

use Domains\Balance\DTOs\BalanceDto;
use Domains\Cart\DTOs\CartDto;
use Domains\DTO;

class UserDto extends DTO {
    private string $id;
    private string $username;
    private string $email;
    private string $role;
    private BalanceDto|null $balanceDto;
    private CartDto|null $cartDto;
    public function __construct(
        string $id, 
        string $username, 
        string $email, 
        string $role,
        BalanceDto $balanceDto = null,
        CartDto $cartDto = null
    )
    {
        $this->id = $id;
        $this->username = $username;
        $this->email = $email;
        $this->role = $role;
        $this->balanceDto = $balanceDto;
        $this->cartDto = $cartDto;
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

    public function getRole(): string
    {
        return $this->role;
    }

    public function getBalance(): BalanceDto | null {
        return $this->balanceDto;
    }

    public function getCart(): CartDto | null {
        return $this->cartDto;
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
