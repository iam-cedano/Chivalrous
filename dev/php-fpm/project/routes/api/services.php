<?php

use App\Http\Controllers\ServicesController;

Route::controller(ServicesController::class)->group(function() {
    Route::get('/services', 'index')->name('api.services');
});