<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class AuthController extends Controller
{
    public function authenticateByWeb(Request $request): RedirectResponse {
        $credentials = $request->validate([
            'name' => ['required'],
            'password' => ['required']
        ]);

        if (Auth::guard('web')->attempt($credentials) == FALSE) {
            return back()->with('error', 'The provided credentials do not match our records or guard doesn\'t exist.');
        }

        $request->session()->regenerate();

        $user = Auth::guard('web')->user();
      
        $role = $user->role;

        return match ($role) {
            Config::get('constants.roles.client') => redirect()->route('client.dashboard'),
            Config::get('constants.roles.admin') => redirect()->route('admin.dashboard'),
            default => back()->with('error', 'User has an unknown role.')
        };
    }

    public function authenticateByApi(Request $request): mixed {

    }

    public function showLoginForm() {
        
    }
}
