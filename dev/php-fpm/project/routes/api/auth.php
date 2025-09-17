<?php

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

Route::prefix('/auth')->group(function() {

    Route::post('/login', function(Request $request): JsonResponse {
        return app(AuthController::class)->login($request);
    })->name('api.auth.login');

});