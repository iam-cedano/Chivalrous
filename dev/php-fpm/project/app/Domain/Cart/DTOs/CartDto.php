<?php

namespace Domains\Cart\DTOs;

use Domains\DTO;

class CartDto extends DTO {
    public function __construct(private string $id, private string $userid, private int $itemCount) {}

    public function getId(): string {
        return $this->id;
    }

    public function getUserId(): string
    {
        return $this->userid;
    }

    public function getItemCount(): int
    {
        return $this->itemCount;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'userId' => $this->userid,
            'itemCount' => $this->itemCount
        ];
    }

    public function toJSON(): string
    {
        return json_encode($this->toArray());
    }
}
