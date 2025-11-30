<?php

namespace Domain\Auth;

interface TokenServiceInterface {

    public function createToken(int $id, string $name): string;

}