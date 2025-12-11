<?php
use Http\Controllers\CartController;

Route::middleware(['auth:sanctum'])
->controller(CartController::class)
->group(function() {
    Route::get('/cart', 'getCart')->name('api.cart');
    Route::post('/cart', 'addItem')->name('api.cart.store');
});