<?php

namespace Infra\Cart;

use Domains\Cart\Interfaces\CartServiceInterface;

class CartService implements CartServiceInterface {

    public function addItem(int $user_id, int $source_service_id, int $quantity): void {
        
    }

    public function removeItem(): void {

    }
}