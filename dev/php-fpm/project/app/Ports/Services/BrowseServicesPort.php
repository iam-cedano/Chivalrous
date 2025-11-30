<?php

namespace App\Ports\Services;

use Illuminate\Database\Eloquent\Collection;

interface BrowseServicesPort {
    public function all(): Collection;
    public function allAsPage(string $pageNumber, string $count): array;
}
