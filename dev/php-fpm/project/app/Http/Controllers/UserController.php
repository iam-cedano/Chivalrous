<?php

namespace App\Http\Controllers;

use App\Services\SmmProviderService;
use Illuminate\Contracts\View\View;

class UserController extends Controller
{
    public function __construct(
        private SmmProviderService $smmProviderService
    ) {}

    public function login(): View {
        return view('users.login', ['name' => 'Miguel']);
    }
}
