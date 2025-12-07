<?php

namespace Usecases\Auth;

use Domains\Session\Interfaces\AuthMethod;
use Domains\Session\Interfaces\SessionServiceInterface;

class StartSessionByUserIdUsecase {
    public function __construct(
        private SessionServiceInterface $sessionServiceInterface
    ) {}
    public function execute(string $user_id, AuthMethod $method = AuthMethod::USER_ID): void {
        $this->sessionServiceInterface->setSecret($user_id);

        $this->sessionServiceInterface->startSession($method);
    }
}