<?php

namespace Domain\Auth;
use Domain\User\UserDomain;

interface SessionServiceInterface {
    public function currentUser(): UserDomain;

}