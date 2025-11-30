<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::controller(AuthController::class)->prefix('/auth')->group(function() {
    Route::post('/login', 'login')->name('auth.web');

    Route::get('/logout', 'logout')->name('auth.logout');

    Route::get('/login', fn () => view('auth.index'))->name('auth.login');
});
