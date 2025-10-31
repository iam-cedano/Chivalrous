<?php

namespace App\Models;

use Database\Factories\SmmPanelFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SmmPanel extends Model
{
    use HasFactory;

    protected $table = 'smm_panels';
    protected $guard = [
        'id',
        'name',
        'url',
        'api_url',
        'logo_uri'
    ];

    public function ApiKey(): HasMany {
        return $this->hasMany(SmmPanelApiKey::class, 'smm_panel_id');
    }

    protected static function newFactory() {
        return SmmPanelFactory::new();
    }
}
