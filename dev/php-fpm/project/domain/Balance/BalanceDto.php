<?php

namespace Domain\Balance;

use Domain\DTO;

class BalanceDto extends DTO {
    public function __construct(private string $userid, private int $amount) {}

    public function getUserId(): string
    {
        return $this->userid;
    }

    public function getAmount(): int
    {
        return $this->amount;
    }

    public function toArray(): array
    {
        return [
            'userId' => $this->userid,
            'amount' => $this->amount,
        ];
    }

    public function toJSON(): string
    {
        return json_encode($this->toArray());
    }
}