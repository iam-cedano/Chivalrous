<?php

namespace App\Usecases\Services;

use App\Ports\Services\GetServicesPort;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
class GetServicesUsecase {
    
    public function __construct(
       private GetServicesPort $getServicesPort
    ) {}

    public function all(): Collection {
        return $this->getServicesPort->all();
    }

    public function query(string $query): Collection {
        return $this->getServicesPort->query($query);
    }

    public function queryAsPage(string $pageNumber = '1', string $count = '10', string $query): array {
        return $this->getServicesPort->queryAsPage($pageNumber, $count, $query);
    }

    public function allAsPage(string $pageNumber = '1', string $count = '10'): array {
        return $this->getServicesPort->allAsPage($pageNumber, $count);
    }
}