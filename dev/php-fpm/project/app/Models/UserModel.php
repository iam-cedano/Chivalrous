<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
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

    protected $keyType = 'string';
    protected $guard = [    
        'id',
        'username',
        'email',
        'timezone_offset',
        'role',
        'api_key',
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

    public function balance(): HasOne {
        return $this->hasOne(BalanceModel::class, 'user_id');
    }
    public function isAdministrator(): bool {
        return $this->role == Config::get('constants.roles.admin');
    }

    protected static function newFactory() {
        return UserFactory::new();
    }
}