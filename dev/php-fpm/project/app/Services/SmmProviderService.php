<?php

namespace App\Services;

use App\Models\SmmProvider;
use App\Repositories\Interfaces\SmmProviderRepositoryInterface;

class SmmProviderService {

    public function __construct(
        private SmmProviderRepositoryInterface $repository
    ) {}

    public function createProvider(array $data):SmmProvider {
        return $this->repository->createProvider($data);
    }

}