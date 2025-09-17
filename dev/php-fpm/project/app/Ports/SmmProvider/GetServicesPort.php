<?php

namespace App\Ports\SmmProvider;

interface GetServicesPort {
    public function execute(): array;
}