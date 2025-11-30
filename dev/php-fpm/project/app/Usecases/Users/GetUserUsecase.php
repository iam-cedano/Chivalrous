<?php

namespace App\Usecases\Users;

use App\Ports\Users\GetUserPort;

class GetUserUsecase {

    public function __construct(
        private GetUserPort $getUserPort
    ) {}
    
    public function getUser(int $id) {
        return $this->getUserPort->getUser($id);
    }
}