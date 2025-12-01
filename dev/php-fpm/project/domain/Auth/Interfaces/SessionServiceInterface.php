<?php

namespace Domain\Auth\Interfaces;

interface SessionServiceInterface {
    public function isLogged(): bool;
}