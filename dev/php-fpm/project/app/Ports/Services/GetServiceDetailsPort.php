<?php

namespace App\Ports\Services;

interface GetServiceDetailsPort {
    public function getService(int $id): array;
    public function getServiceAndSources(int $id): array;
}
