<?php

namespace App\Repositories\Interfaces;

use App\Models\SmmProvider;

interface SmmProviderRepositoryInterface {
    public function createProvider(array $data): SmmProvider;

}