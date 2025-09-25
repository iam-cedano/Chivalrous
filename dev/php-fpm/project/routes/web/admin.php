<?php

Route::prefix('admin')->group(function () {
    Route::get('dashboard', fn () => 'Admin Dashboard')->name('admin.dashboard');
})->middleware('auth');