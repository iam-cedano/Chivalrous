<?php

namespace App\Repositories;

use App\Models\SmmProvider;
use App\Repositories\Interfaces\SmmProviderRepositoryInterface;

class SmmProviderRepository implements SmmProviderRepositoryInterface {

    public function createProvider(array $data):SmmProvider {
       return SmmProvider::create($data);
    }

}