<?php

namespace Infrastructure\Local\Users;

use App\Ports\Users\GetUserPort;

class GetUserAdapter implements GetUserPort {
    public function getUser(int $id) {
        return ['id' => $id, 'user' => 'Oscar Cedano bro'];
    }
}