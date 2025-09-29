<?php
use App\Http\Controllers\ClientController;
use App\Http\Middleware\EnsureUserIsAuthenticated;
use Illuminate\Support\Facades\Route;

Route::controller(ClientController::class)
->middleware([EnsureUserIsAuthenticated::class])
->group( function () {
    Route::get('/orders', 'showOrdersPage')->name('client.orders');
    Route::get('/dashboard','showDashboardPage')->name('client.dashboard');
});