<?php
use Http\Controllers\UserController;
use Http\Middleware\EnsureUserIsAdministrator;

Route::controller(UserController::class)
->group(function() {
    Route::post('/user', 'createUser')->name('api.create.user');
});

Route::middleware(['auth:sanctum'])
->controller(UserController::class)
->group(function () {
    Route::get('/user/token', 'getToken')->name('api.user.token');
    Route::get('/user', 'getCurrentUser')->name('api.user');
});

Route::middleware(['auth:sanctum', EnsureUserIsAdministrator::class])
->controller(UserController::class)
->group(function () {
    Route::get('/user/{id}', 'getUser')->name('api.user.id');
});