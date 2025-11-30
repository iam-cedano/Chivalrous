<?php

namespace App\Http\Controllers;

use App\Usecases\Users\GetUserUsecase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class UserController extends Controller
{
    public function __construct(
        private GetUserUsecase $getUserUsecase
    ) {}

    public function getUser() {
        $data = $this->getUserUsecase->getUser(3);

        return response()->json($data);
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
