<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class SmmPanelApiKey extends Model
{
    protected $table = 'smm_panels_api_keys';

    public function SmmPanel(): HasOne {
        return $this->hasOne(SmmPanel::class, 'smm_panel_id');
    }
}
