<?php

namespace App\Models;

use Database\Factories\ServiceFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
        'banner_uri',
        'minimum_quantity',
        'maximum_quantity'
    ];

    public function sources(): HasMany {
        return $this->hasMany(SourceService::class, 'service_id');
    } 

    protected static function newFactory() {
        return ServiceFactory::new();
    }
}
