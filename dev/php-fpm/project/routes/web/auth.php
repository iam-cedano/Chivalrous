<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::prefix('/auth')->group(function () {
    
    Route::post('/login', [AuthController::class, 'authenticate'])->name('auth.authenticate');

    Route::get('/login', fn () => view('auth.login'))->name('auth.login');
});
