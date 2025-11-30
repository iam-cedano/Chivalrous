<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BalanceModel extends Model
{
    use HasFactory;
    protected $table = 'balances';
    protected $primaryKey = 'id';
    public $incremeting = true;
    protected $guard = [
        'amount'
    ];
    public function user(): BelongsTo {
        return $this->belongsTo(UserModel::class, 'user_id');
    }
}
