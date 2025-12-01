<?php

namespace App\Http\Controllers;

use App\Usecases\Auth\CreateApiTokenUsecase;
use App\Usecases\User\GetCurrentUserUsecase;
use App\Usecases\User\GetUserUsecase;

class UserController extends Controller
{
    public function __construct(
        private GetUserUsecase $getUserUsecase,
        private GetCurrentUserUsecase $getCurrentUserUsecase,
        private CreateApiTokenUsecase $createApiTokenUsecase
    ) {}

    public function getUser(string $id) {
        $user = $this->getUserUsecase->execute($id);

        return response()->json([
            'username' => $user->getUsername(),
            'email' => $user->getEmail(),
        ]);
    }

    public function getCurrentUser() {
        $user = $this->getCurrentUserUsecase->execute();

        return response()->json([
            'username' => $user->getUsername(),
            'email' => $user->getEmail(),
            'balance' => [
                'amount' => $user->getBalance()->getAmount()
            ]
        ]);
    }

    public function getToken() {
        $user = $this->getCurrentUserUsecase->execute();
        
        $data = $this->createApiTokenUsecase->execute($user->getId());

        return json_encode($data);
    }
}
