<?php

namespace App\Models;

use Database\Factories\ServiceFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Model to represent a service from a SMM Panel.
 */
class Service extends Model
{
    use HasFactory;
    protected $table = 'services';
    protected $guard = [    
        'id',
        'name',
        'short_description',
        'long_description',
        'logo_uri',
        'minimum_quantity',
        'maximum_quantity'
    ];

    protected static function newFactory() {
        return ServiceFactory::new();
    }
}
