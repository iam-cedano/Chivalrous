<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Config;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasUuids, SoftDeletes, HasApiTokens;
    protected $keyType = 'string';
    protected $guard = [    
        'id',
        'username',
        'email',
        'timezone_offset',
        'role',
        'api_key'
    ];
    protected $hidden = [
        'password',
        'api_key'        
    ];
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }

    public function balance(): HasOne {
        return $this->hasOne(Balance::class, 'user_id');
    }
    public function isAdministrator(): bool {
        return $this->role == Config::get('constants.roles.admin');
    }

    protected static function newFactory() {
        return UserFactory::new();
    }
}