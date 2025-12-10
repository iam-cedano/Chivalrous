<?php

namespace Usecases\Cart;

use Domains\Cart\DTOs\CartDto;
use Domains\User\Interfaces\UserServiceInterface;

class GetCurrentCartUsecase {
    
    public function __construct(
        private UserServiceInterface $userServiceInterface
    ) {}

    public function execute(): CartDto | null {
      $user = $this->userServiceInterface->getCurrentUser();
    
      $cart = $user->getCart();

      return $cart;
    }
}