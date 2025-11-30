<?php

namespace App\Usecases\Services;

use App\Ports\Services\SearchServicesPort;
use Illuminate\Database\Eloquent\Collection;

class SearchServicesUsecase {
    
    public function __construct(
       private SearchServicesPort $searchServicesPort
    ) {}

    public function query(string $query): Collection {
        return $this->searchServicesPort->query($query);
    }

    public function queryAsPage(string $pageNumber = '1', string $count = '10', string $query): array {
        return $this->searchServicesPort->queryAsPage($pageNumber, $count, $query);
    }
}
