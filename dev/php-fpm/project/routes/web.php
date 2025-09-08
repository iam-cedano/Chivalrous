<?php
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('/auth')->group(function() {
    
    Route::get('/login', [AuthController::class, 'login'])->name('users.login');

    Route::post('/', [AuthController::class, 'index'])->name('users.index');
});

Route::get('/', function() {
    return '<h1>Chivalrous the best SMM Panel</h1>';
});