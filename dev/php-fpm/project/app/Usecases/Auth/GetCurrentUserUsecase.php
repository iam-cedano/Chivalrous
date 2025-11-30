<?php
namespace App\Usecases\Auth;

use Domain\Auth\Interfaces\SessionServiceInterface;
use Domain\User\UserDomain;

class GetCurrentUserUsecase {

    public function __construct(
        private SessionServiceInterface $sessionServiceInterface
    ) {}

    public function execute(): UserDomain {
        return $this->sessionServiceInterface->currentUser();
    }
}