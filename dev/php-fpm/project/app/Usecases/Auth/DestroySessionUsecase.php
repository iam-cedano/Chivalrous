<?php

namespace Usecases\Auth;

use Domains\Auth\Interfaces\AuthServiceInterface;

class DestroySessionUsecase {
    public function __construct(
        private AuthServiceInterface $authServiceInterface
    ) {}
    public function execute() {
    }
}