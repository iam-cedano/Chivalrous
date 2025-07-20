<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Config;

class UserController extends Controller
{
    public function login(): View {
        echo Config::get('app.cdn');

        return view('users.login', ['name' => 'Miguel']);
    }
}
