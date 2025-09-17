<?php

namespace App\Usecases\SmmProvider;

class GetServicesUsecase {

    public function __construct(
        private \App\Ports\SmmProvider\GetServicesPort $getServicesPort
    ) {

    }
    public function execute(): array {
        return $this->getServicesPort->execute();
    }
}