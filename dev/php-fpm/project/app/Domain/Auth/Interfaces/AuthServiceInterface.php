<?php

namespace Domains\Auth\Interfaces;

use Domains\Auth\DTOs\LoginResponseDto;

interface AuthServiceInterface {
        public function login(): LoginResponseDto;
}