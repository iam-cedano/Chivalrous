<?php

namespace App\Http\Controllers;

use App\Usecases\LoginUsecase;
use Auth;
use Domian\Auth\AuthServiceInterface;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\View\View;
use Infrastructure\Auth\FormBasedAuthService;

trait AuthenticationsForWeb {
    public function authenticateByWeb(Request $request): Response
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required']
        ]);

        if (Auth::guard('web')->attempt($credentials) == false) {
            return response('Unathenticated', 401);
        }

        $request->session()->regenerate();
        
        $user = Auth::guard('web')->user();

        return response([], 200);
    }

    public function showLogin(): RedirectResponse|View
    {
        if (!Auth::guard('web')->check()) {
            return view('auth.login');
        }

        $user = Auth::guard('web')->user();

        $role = Auth::guard('web')->user()->role;

        return redirect($this->getRouteByRole($role));
    }

    private function getRouteByRole(int $role): string
    {
        return match ($role) {
            Config::get('constants.roles.client') => route('client'),
            Config::get('constants.roles.admin') => route('admin.dashboard'),
        };
    }
}

trait AuthenticationsForApi {}

class AuthController extends Controller
{
    public function __construct( private LoginUsecase $loginUsecase ){}

    public function login(Request $request) {
        $authService = new FormBasedAuthService($request);
        $this->loginUsecase = new LoginUsecase($authService);

        $responseDto = $this->loginUsecase->execute();
    }

    public function logout(Request $request): RedirectResponse
    {
        $user = Auth::guard('web')->user();

        $user->tokens()->delete();

        Auth::guard()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('auth.login');
    }
}
