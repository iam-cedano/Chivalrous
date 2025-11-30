<?php

namespace Domain\Auth;


use App\Models\UserModel as User;
use Illuminate\Support\Facades\Auth;

class GetUserBySession {

    function execute(): User | null {
        if (! auth('web')->hasUser() ) {
            return null;
        }

        $user = Auth::guard('web')->user();
        
        return $user;
    }

}