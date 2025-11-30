<?php

namespace App\Usecases\Services;

use App\Ports\Services\GetServiceDetailsPort;

class GetServiceDetailsUsecase {
    
    public function __construct(
       private GetServiceDetailsPort $getServiceDetailsPort
    ) {}

    public function getService(int $id): array {
        return $this->getServiceDetailsPort->getService($id);
    }

    public function getServiceAndSources(int $id): array {
        return $this->getServiceDetailsPort->getServiceAndSources($id);
    }
}
