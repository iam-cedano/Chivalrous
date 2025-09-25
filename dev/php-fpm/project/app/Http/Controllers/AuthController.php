<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function authenticate(Request $request): RedirectResponse {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required']
        ]);

        if (Auth::guard('user')->attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        } else {
            return back()->with('error', 'The provided credentials do not match our records.');
        }
    }
}
