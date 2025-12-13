<?php

namespace Models;

use Illuminate\Database\Eloquent\Model;

class ServiceDetailsModel extends Model
{   
    public $table = 'service_details';

    public $timestamps = false;

    public $guard = [
        'id',
        'service_id',
        'content'
    ];

    public function service() {
        return $this->hasOne(ServiceModel::class, 'id', 'service_id');
    }
}
