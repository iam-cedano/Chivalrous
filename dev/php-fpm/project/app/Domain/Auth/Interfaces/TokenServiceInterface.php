<?php

namespace Domains\Auth\Interfaces;

interface TokenServiceInterface {
    public function createToken(string $id, string $name): string;

}