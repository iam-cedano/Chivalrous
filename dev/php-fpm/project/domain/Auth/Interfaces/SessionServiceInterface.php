<?php

namespace Domain\Auth\Interfaces;
use Domain\User\UserDomain;

interface SessionServiceInterface {
    public function currentUser(): UserDomain;
    public function isLogged(): bool;
}