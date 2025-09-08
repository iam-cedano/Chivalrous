<?php
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Http\Middleware\ValidateCsrfToken;


Route::prefix('/auth')->group(function() {

    Route::get('/login',  fn () => view('auth.login'))->name('auth.login');

})->middleware(ValidateCsrfToken::class);
