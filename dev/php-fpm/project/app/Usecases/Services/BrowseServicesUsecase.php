<?php

namespace Usecases\Services;

use App\Ports\Services\BrowseServicesPort;
use Illuminate\Database\Eloquent\Collection;

class BrowseServicesUsecase {
    
    public function __construct(
       private BrowseServicesPort $browseServicesPort
    ) {}

    public function all(): Collection {
        return $this->browseServicesPort->all();
    }

    public function allAsPage(string $pageNumber = '1', string $count = '10'): array {
        return $this->browseServicesPort->allAsPage($pageNumber, $count);
    }
}
