<?php
namespace Http\Controllers;

use Http\Requests\CreateUserRequest;
use Usecases\Auth\CreateApiTokenUsecase;
use Usecases\Auth\StartSessionByUserIdUsecase;
use Usecases\User\CreateUserUsecase;
use Usecases\User\GetCurrentUserUsecase;
use Usecases\User\GetUserUsecase;

class UserController extends Controller
{
    public function __construct(
        private GetUserUsecase $getUserUsecase,
        private GetCurrentUserUsecase $getCurrentUserUsecase,
        private CreateApiTokenUsecase $createApiTokenUsecase,
        private CreateUserUsecase $createUserUsecase,
        private StartSessionByUserIdUsecase $startSessionByUserIdUsecase
    ) {}

    public function getUser(string $id) {
        $user = $this->getUserUsecase->execute($id);

        return response()->json([
            'username' => $user->getUsername(),
            'email' => $user->getEmail(),
            'balance' => [
                'amount' => $user->getBalance()->getAmount()
            ]
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

    public function createUser(CreateUserRequest $request) {
       $user = $this->createUserUsecase->execute($request);

       $this->startSessionByUserIdUsecase->execute($user->getId());
        
        return response()->json([
            'message' => 'User successfully created',
        ], 201);
    }
}
