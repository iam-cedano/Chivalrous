<?php

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('/api/auth')->group(function() {

    Route::post('/login', function(Request $request): RedirectResponse {
        return redirect('https://google.com', 302);
    })->name('api.auth.login');

});