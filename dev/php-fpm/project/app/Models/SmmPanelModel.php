<?php

namespace App\Models;

use Database\Factories\SmmPanelFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SmmPanelModel extends Model
{
    use HasFactory;

    protected $table = 'smm_panels';
    protected $guard = [
        'id',
        'name',
        'url',
        'api_url',
    ];

    public function apiKey(): HasMany {
        return $this->hasMany(SmmPanelApiKeyModel::class, 'smm_panel_id');
    }

    protected static function newFactory() {
        return SmmPanelFactory::new();
    }
}
