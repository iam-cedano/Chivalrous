<?php

namespace App\Ports\Services;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

interface GetServicesPort {
    public function all(): Collection;
    public function query(string $query): Collection;    
    public function allAsPage(string $pageNumber, string $count): array;
    public function queryAsPage(string $pageNumber, string $count, string $query): array;
    public function getService(int $id): array;
}