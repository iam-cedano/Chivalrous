<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceDetails extends Model
{   
    public $table = 'service_details';

    public $timestamps = false;

    public $guard = [
        'id',
        'service_id',
        'content'
    ];

    public function service() {
        return $this->hasOne(Service::class, 'id', 'service_id');
    }
}
