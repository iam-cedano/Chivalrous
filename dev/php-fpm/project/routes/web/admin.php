<?php

use Http\Controllers\AdminController;
use Http\Middleware\EnsureUserIsAdministrator;
use Http\Middleware\EnsureUserIsAuthenticated;

Route::controller(AdminController::class)
->middleware([EnsureUserIsAuthenticated::class, EnsureUserIsAdministrator::class])
->prefix('/admin')
->group( function () {
    Route::get('/users', 'showUsersPage')->name('admin.users');
    Route::get('/dashboard', 'showDashboardPage')->name('admin.dashboard');
});