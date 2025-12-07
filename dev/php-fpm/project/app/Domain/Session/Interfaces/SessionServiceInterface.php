<?php

namespace Domains\Session\Interfaces;

enum AuthMethod {
    case USER_ID;
    case TOKEN;
}

interface SessionServiceInterface {
    public function startSession(AuthMethod $method = AuthMethod::USER_ID): void;

    public function destroySession(): void;

    public function setSecret(mixed $secret): void;
}