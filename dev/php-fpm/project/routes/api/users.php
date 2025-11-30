<?php
use App\Http\Controllers\UserController;

Route::middleware(['auth:sanctum', 'web'])
->controller(UserController::class)
->group(function () {
    Route::get('/user/token', 'getToken')->name('api.user.token');
    Route::get('/user/{id}', 'getUser')->name('api.user.id');
});