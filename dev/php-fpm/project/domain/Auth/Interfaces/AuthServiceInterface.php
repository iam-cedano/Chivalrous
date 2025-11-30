<?php

namespace Domain\Auth\Interfaces;

use Domain\Auth\DTOs\LoginResponseDto;

interface AuthServiceInterface {
        public function login(): LoginResponseDto;
}