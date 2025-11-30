<?php

namespace Domain\Auth;

use App\Models\UserModel as User;

class GetUserByToken {

    function execute(): User | null {
        if (! auth('sanctum')->user()  ) {
            return null;
        }

        $user = auth('sanctum')->user();
        
        return $user;
    }

}