<?php

namespace Models;

use Models\OrderModel;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Config;
use Laravel\Sanctum\HasApiTokens;

class UserModel extends Authenticatable
{
    use HasFactory, Notifiable, HasUuids, SoftDeletes, HasApiTokens;
    protected $table = 'users'; 
    protected $fillable = [    
        'username',
        'email',
        'password',
        'timezone_offset',
        'role',
        'language',
    ];
    protected $hidden = [
        'password',
        'remember_token',
        'api_key',
        'created_at',
        'updated_at',
        'deleted_at'       
    ];
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }

    protected static function booted(): void
    {
        static::created(function (UserModel $user) {
            $user->balance()->create([
                'amount' => 0
            ]);
        });
    }

    public function balance(): HasOne {
        return $this->hasOne(BalanceModel::class, 'user_id');
    }

    public function orders(): HasMany {
        return $this->hasMany(OrderModel::class, 'user_id');
    }

    public function isAdministrator(): bool {
        return $this->role == Config::get('constants.roles.admin');
    }
    protected static function newFactory() {
        return UserFactory::new();
    }
}