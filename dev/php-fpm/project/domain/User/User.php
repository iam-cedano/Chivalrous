<?php

use App\Models\UserModel;
class User {
    private int $id;
    private string $username;
    private string $email;
    private int $role;

    public function __construct(UserModel $userModel) {
        
    }

    public function toJSON() {

    }
}