<?php

namespace Domian\Auth;

use Domain\Auth\LoginResponseDto;

interface AuthServiceInterface {
    public function login(): LoginResponseDto;
}