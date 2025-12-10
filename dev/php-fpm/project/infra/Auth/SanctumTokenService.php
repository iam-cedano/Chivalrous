<?php

namespace Infra\Auth;

use Models\UserModel;
use Domains\Auth\Interfaces\TokenServiceInterface;

class SanctumTokenService implements TokenServiceInterface {
    public function createToken(string $id, string $name = 'api-token'): string {
        $user = UserModel::find($id);

        $user->tokens()->delete();

        $token = $user->createToken($name);
        
        return $token->plainTextToken;
    }
}