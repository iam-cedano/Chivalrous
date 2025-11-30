<?php

namespace Infrastructure\Auth;

use App\Models\UserModel;
use Domain\Auth\SessionServiceInterface;
use Domain\User\UserDomain;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SessionService implements SessionServiceInterface {

    public function __construct(
        private Request $request
    ) {}

    public function currentUser(): UserDomain {
        $user = Auth::guard('web')->user();

        $model = UserModel::find($user->id);

        $domain = new UserDomain($model);
        
        return $domain;
    }
}