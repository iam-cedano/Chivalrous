<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function authenticate(Request $request):void {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required']
        ]);

        var_dump($credentials);
    }
}
