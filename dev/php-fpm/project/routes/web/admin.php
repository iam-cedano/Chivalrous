<?php

use App\Http\Controllers\AdminController;
use App\Http\Middleware\EnsureUserIsAdministrator;
use App\Http\Middleware\EnsureUserIsAuthenticated;

Route::controller(AdminController::class)
->middleware([EnsureUserIsAuthenticated::class, EnsureUserIsAdministrator::class])
->prefix('admin')
->group( function () {
    Route::get('/users', 'dashboard')->name('dashboard');
    Route::get('/users', 'users')->name('users');
});