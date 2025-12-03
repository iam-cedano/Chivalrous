<?php

namespace Domains\Auth\Interfaces;

interface SessionServiceInterface {
    public function isLogged(): bool;
}