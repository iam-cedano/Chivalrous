<?php
use Http\Controllers\UserController;

Route::middleware(['auth:sanctum'])
->controller(UserController::class)
->group(function () {
    Route::get('/user/token', 'getToken')->name('api.user.token');
    Route::get('/user/{id}', 'getUser')->name('api.user.id');
    Route::get('/user', 'getCurrentUser')->name('api.user');
});

Route::middleware(['auth:sanctum'])
->controller(UserController::class)
->group(function() {
    Route::post('/user', 'createUser')->name('api.create.user');
});