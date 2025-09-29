<?php

use App\Http\Controllers\AdminController;
use App\Http\Middleware\EnsureUserIsAdministrator;
use App\Http\Middleware\EnsureUserIsAuthenticated;

Route::controller(AdminController::class)
->middleware([EnsureUserIsAuthenticated::class, EnsureUserIsAdministrator::class])
->prefix('/admin')
->group( function () {
    Route::get('/users', 'showUsersPage')->name('admin.users');
    Route::get('/dashboard', 'showDashboardPage')->name('admin.dashboard');
});