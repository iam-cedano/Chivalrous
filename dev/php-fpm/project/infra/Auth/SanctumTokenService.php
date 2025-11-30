<?php

namespace Infrastructure\Auth;

use App\Models\UserModel;
use Domain\Auth\TokenServiceInterface;

class SanctumTokenService implements TokenServiceInterface {
    public function createToken(int $id, string $name = 'api-token'): string {
        $user = UserModel::find($id);

        $user->tokens()->where($name)->delete();
        $token = $user->createToken($name);
        
        return $token->plainTextToken;
    }
}