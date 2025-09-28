<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::prefix('/auth')->group(function () {
    
    Route::post('/login', [AuthController::class, 'authenticateByWeb'])->name('auth.web');

    Route::get('/login', fn () => view('auth.login'))->name('auth.login');
});
