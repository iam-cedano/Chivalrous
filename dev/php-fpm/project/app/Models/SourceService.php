<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SourceService extends Model
{
    protected $table = 'source_services';
    protected $guard = [    
        'id',   
        'service_id',
        'quality',
        'price_per_thousand',
        'status'
    ];
}
