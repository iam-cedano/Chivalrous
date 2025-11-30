<?php

namespace Domain\Auth\Interfaces;

interface TokenServiceInterface {

    public function createToken(string $id, string $name): string;

}