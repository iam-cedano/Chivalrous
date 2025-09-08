<?php

namespace App\Services\Auth\Interfaces;

interface AuthenticationStrategy {
    public function login(array $data): array;
}