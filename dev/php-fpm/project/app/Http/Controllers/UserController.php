<?php

namespace App\Http\Controllers;

use App\Usecases\Users\GetUserUsecase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Domain\User\UserChecker;
use Domain\Auth\GetUserBySession;
use Domain\Auth\GetUserByToken;

class UserController extends Controller
{
    public function __construct(
        private GetUserUsecase $getUserUsecase,
        private UserChecker $userChecker,
        private GetUserBySession $getUserBySession,
        private GetUserByToken $getUserByToken
    ) {}

    public function getUser(int $id) {
        $data = $this->getUserUsecase->getUser(3);

        return response()->json($data);
    }

    public function getCurrentUser(Request $request) {
        if ( $request->hasHeader('Authorization') ) {
            return $this->getUserByToken->execute()->toJson();
        }

        return $this->getUserBySession->execute()->toJson();
    }

    public function getToken() {
        $user = Auth::user();
        
        $user->tokens()->where('name', 'api-token')->delete();

        $token = $user->createToken('api-token');
        
        return response()->json([
            'token' => $token->plainTextToken,
        ]);
    }
}
