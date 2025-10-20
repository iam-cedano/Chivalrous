<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\View\View;

trait AuthenticationsForWeb {
    public function authenticateByWeb(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required']
        ]);

        if (Auth::guard('web')->attempt($credentials) == false) {
            return back()->with('error', 'The provided credentials do not match our records or guard doesn\'t exist.');
        }

        $request->session()->regenerate();

        $user = Auth::guard('web')->user();

        $role = $user->role;

        return $this->redirectByRoleForWeb($role);
    }

    public function showLoginForm(): RedirectResponse|View
    {
        if (!Auth::guard('web')->check()) {
            return view('auth.login');
        }

        $role = Auth::guard('web')->user()->role;

        return $this->redirectByRoleForWeb($role);
    }

    private function redirectByRoleForWeb(int $role): RedirectResponse
    {
        return match ($role) {
            Config::get('constants.roles.client') => redirect()->route('client.home'),
            Config::get('constants.roles.admin') => redirect()->route('admin.dashboard'),
            default => back()->with('error', 'User has an unknown role.')
        };
    }
}

trait AuthenticationsForApi {}
class AuthController extends Controller
{
    use AuthenticationsForWeb, AuthenticationsForApi;

    public function logout(Request $request): RedirectResponse
    {
        Auth::guard()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('global.index');
    }
}
