<?php

namespace App\Http\Controllers;

use App\Usecases\SmmProvider\GetServicesUsecase;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(
        private GetServicesUsecase $getServicesUsecase
    ) {}

    public function login(Request $request) {
        $response = $this->getServicesUsecase->execute();

        return response()->json($response);
    }

    public function index(Request $request): RedirectResponse {
        return redirect('users.login', 401);
    }
    


}
