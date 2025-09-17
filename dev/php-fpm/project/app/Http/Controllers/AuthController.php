<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(
        private \App\Usecases\SmmProvider\GetServicesUsecase $getServicesUsecase
    ) {}

    public function login(Request $request) {
        $response = $this->getServicesUsecase->execute();

        return response()->json($response);
    }

    public function index(Request $request): RedirectResponse {
        return redirect('users.login', 401);
    }
}
