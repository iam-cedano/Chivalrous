<?php
use App\Http\Controllers\ClientController;
use Illuminate\Support\Facades\Route;

Route::controller(ClientController::class)
->middleware('auth:web')
->group( function () {
    Route::get('/orders', 'orders');
});


