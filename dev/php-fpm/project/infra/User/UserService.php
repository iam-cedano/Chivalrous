<?php
namespace Infrastructure\User;

use App\Models\UserModel;
use Domain\Balance\BalanceDto;
use Domain\User\UserDto;
use Illuminate\Support\Facades\Auth;
use Domain\User\Interfaces\UserServiceInterface;

class UserService implements UserServiceInterface {
    public function getCurrentUser(): UserDto {
        $auth = Auth::guard()->user();

        $model = UserModel::with('balance')->findOrFail($auth->id);

        $balanceDto = null;
        
        if ($model->balance) {
            $balanceDto = new BalanceDto($model->id, (int) $model->balance->amount);
        }

        return new UserDto(
            $model->id,
            $model->username,
            $model->email,
            (int) $model->role,
            $balanceDto
        );
    }

    public function getUser(string $id): UserDto {
        $model = UserModel::with('balance')->findOrFail($id);

        $balanceDto = null;
        if ($model->balance) {
            $balanceDto = new BalanceDto($model->id, (int) $model->balance->amount);
        }

        return new UserDto(
            $model->id,
            $model->username,
            $model->email,
            (int) $model->role,
            $balanceDto
        );
    }
}