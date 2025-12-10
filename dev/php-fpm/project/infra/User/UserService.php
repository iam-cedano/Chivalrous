<?php
namespace Infra\User;

use App\Exceptions\NotFoundResourceException;
use Domains\Cart\DTOs\CartDto;
use Http\Requests\CreateUserRequest;
use Models\UserModel;
use Domains\Balance\DTOs\BalanceDto;
use Domains\User\DTOs\UserDto;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use Domains\User\Interfaces\UserServiceInterface;

class UserService implements UserServiceInterface {
    public function getCurrentUser(): UserDto {
        $auth = Auth::guard()->user();

        try {
            $model = UserModel::with(['balance', 'cart'])->findOrFail($auth->id);
        } catch (ModelNotFoundException) {
            throw new NotFoundResourceException('User', $auth->id);
        }

        $balanceDto = null;
        $cartDto = null;
        
        if ($model->balance) {
            $balanceDto = new BalanceDto($model->balance->id, $auth->id, $model->balance->amount);
        }

        if ($model->cart) {
            $cartDto = new CartDto($model->cart->id, $model->id, $model->cart->item_count);
        }

        return new UserDto(
            $model->id,
            $model->username,
            $model->email,
            (int) $model->role,
            $balanceDto,
            $cartDto
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
            $balanceDto = new BalanceDto($model->balance->id, $model->id, (int) $model->balance->amount);
        }

        return new UserDto(
            $model->id,
            $model->username,
            $model->email,
            $model->role,
            $balanceDto
        );
    }

    public function createUser(CreateUserRequest $request): UserDto {
        $inputs = $request->validated();

        $username = $inputs['username'];
        $email = $inputs['email'];
        $password = $inputs['password'];

        $user = UserModel::create([
            'username' => $username,
            'email' => $email,
            'password' => $password
        ]);

        $balance = new BalanceDto($user->balance->id, $user->id, (int) $user->balance->amount);

        return new UserDto($user->id, $user->username, $user->email, 1, $balance);
    }
}