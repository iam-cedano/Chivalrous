<?php

namespace App\Http\Controllers;

use App\Repositories\Interfaces\SmmProviderRepositoryInterface;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(
        private SmmProviderRepositoryInterface $smmProviderRepository
    ) {}

    public function login(): View {
        return view('users.login');
    }

    public function index(Request $request): RedirectResponse {
        return redirect('users.login', 401);
    }
}
