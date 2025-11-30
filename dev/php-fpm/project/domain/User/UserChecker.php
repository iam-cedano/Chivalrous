<?php

namespace Domain\User;

use App\Models\UserModel as User;

class UserChecker {
    public function check(User $user): bool {
        
        if ( $user->username == null ||
             $user->role == null     ||
             $user->email == null   
        ) {
            return false;
        }
        
        return true;
    }
}