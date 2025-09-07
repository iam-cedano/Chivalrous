<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/auth/login', function(UserController $user) {
    return $user->login();
});

Route::prefix('/auth')->group(function() {
    
    Route::get('/login', [AuthController::class, 'login'])->name('users.login');

    Route::post('/', [AuthController::class, 'index'])->name('users.index');
});

Route::get('/', function() {
    return view('phpinfo');
});