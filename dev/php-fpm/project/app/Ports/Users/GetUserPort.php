<?php

namespace App\Ports\Users;

interface GetUserPort {
    public function getUser(int $id);
}