<?php

namespace Domains\Balance;

use Domains\DTO;

class BalanceDto extends DTO {
    public function __construct(private int $id, private string $userid, private int $amount) {}

    public function getId(): int {
        return $this->id;
    }

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
            'id' => $this->id,
            'userId' => $this->userid,
            'amount' => $this->amount
        ];
    }

    public function toJSON(): string
    {
        return json_encode($this->toArray());
    }
}