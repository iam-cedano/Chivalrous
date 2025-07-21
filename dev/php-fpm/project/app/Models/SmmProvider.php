<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SmmProvider extends Model
{
    use HasFactory;

    protected $table = 'smm_providers';
    public $timestamps = false;
    public $fillable = [
        'name',
        'description',
        'image'
    ]; 
    
}
