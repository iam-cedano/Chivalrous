<?php
use Http\Controllers\CartController;

Route::middleware(['auth:sanctum', 'web'])
->controller(CartController::class)
->group(function() {
    Route::get('/cart', 'getCart')->name('api.cart');
});