<?php
namespace Infrastructure\User;

use App\Models\UserModel;
use Domain\Balance\BalanceDto;
use App\Exceptions\NotFoundResourceException;
use Domain\User\UserDto;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use Domain\User\Interfaces\UserServiceInterface;

class UserService implements UserServiceInterface {
    public function getCurrentUser(): UserDto {
        $auth = Auth::guard()->user();

        try {
            $model = UserModel::with('balance')->findOrFail($auth->id);
        } catch (ModelNotFoundException) {
            throw new NotFoundResourceException('User', $auth->id);
        }

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
        try {
            $model = UserModel::with('balance')->findOrFail($id);
        } catch (ModelNotFoundException) {
            throw new NotFoundResourceException('User', $id);
        }

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