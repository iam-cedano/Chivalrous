<?php
namespace Domains\Cart\Interfaces;

interface CartServiceInterface {
    public function addItem(int $user_id, int $source_service_id, int $quantity): void;
    public function removeItem(): void;
}