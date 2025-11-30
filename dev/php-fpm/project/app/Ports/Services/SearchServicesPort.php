<?php

namespace App\Ports\Services;

use Illuminate\Database\Eloquent\Collection;

interface SearchServicesPort {
    public function query(string $query): Collection;    
    public function queryAsPage(string $pageNumber, string $count, string $query): array;
}
