<?php

use App\Http\Controllers\AdminController;

Route::controller(AdminController::class)
->middleware('auth')
->prefix('admin')
->group( function () {
    Route::get('/users', 'users')->name('admin.users');
});