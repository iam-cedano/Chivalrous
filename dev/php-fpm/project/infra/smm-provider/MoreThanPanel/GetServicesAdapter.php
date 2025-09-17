<?php 

namespace Infrastructure\SmmProvider\MorethanPanel;

class GetServicesAdapter implements \App\Ports\SmmProvider\GetServicesPort {
    public function execute(): array {
        return ['message' => 'This is a response from MorethanPanel SMM Provider'];
    }
}