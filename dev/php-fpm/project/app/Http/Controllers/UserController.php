<?php

namespace App\Http\Controllers;

use App\Usecases\Auth\CreateApiTokenUsecase;
use App\Usecases\Auth\GetCurrentUserUsecase;
use App\Usecases\Users\GetUserUsecase;
use Domain\User\UserDto;

class UserController extends Controller
{
    public function __construct(
        private GetUserUsecase $getUserUsecase,
        private GetCurrentUserUsecase $getCurrentUserUsecase,
        private CreateApiTokenUsecase $createApiTokenUsecase
        ) {}

    public function getUser(int $id) {
        $data = $this->getUserUsecase->getUser(3);

        return response()->json($data);
    }

    public function getCurrentUser() {
        $domainUser = $this->getCurrentUserUsecase->execute();

        $dto = UserDto::fromDomain($domainUser);

        return response()->json($dto->toJSON());
    }

    public function getToken() {
        $user = $this->getCurrentUserUsecase->execute();
        
        $data = $this->createApiTokenUsecase->execute($user->getId());

        return json_encode($data);
    }
}
