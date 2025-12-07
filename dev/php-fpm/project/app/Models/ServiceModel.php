<?php

namespace App\Models;

use Database\Factories\ServiceFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ServiceModel extends Model
{
    use HasFactory;
    protected $table = 'services';
    protected $guard = [    
        'id',
        'name',
        'short_description',
        'long_description',
        'minimum_quantity',
        'maximum_quantity'
    ];

    public function sources(): HasMany {
        return $this->hasMany(SourceServiceModel::class, 'service_id');
    } 

    public function details(): HasMany {
        return $this->hasMany(ServiceDetailsModel::class, 'service_id');
    }

    protected static function newFactory() {
        return ServiceFactory::new();
    }
}
