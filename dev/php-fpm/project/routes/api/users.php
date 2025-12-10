<?php
use Http\Controllers\UserController;
use Illuminate\Foundation\Http\Middleware\ValidateCsrfToken;

Route::middleware(['auth:sanctum', 'web', ValidateCsrfToken::class])
->controller(UserController::class)
->group(function () {
    Route::get('/user/token', 'getToken')->name('api.user.token');
    Route::get('/user/{id}', 'getUser')->name('api.user.id');
    Route::get('/user', 'getCurrentUser')->name('api.user');
});

Route::middleware(['web'])
->controller(UserController::class)
->group(function() {
    Route::post('/user', 'createUser')->name('api.create.user');
});