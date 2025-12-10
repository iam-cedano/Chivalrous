<?php

namespace Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CartModel extends Model
{
    protected $table = 'carts';

    protected $fillable = [
        'user_id',
        'item_count',
    ];

    public $timestamps = false;

    protected $dates = ['updated_at'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(UserModel::class, 'user_id');
    }
}