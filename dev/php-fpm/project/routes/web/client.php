<?php
use App\Http\Middleware\EnsureUserIsAuthenticated;
use Illuminate\Support\Facades\Route;

Route::middleware([EnsureUserIsAuthenticated::class])
->group(function () {
    Route::view('/home', 'client.index')->name('client.home');
    Route::view('/history', 'client.index')->name('client.history');
});

Route::view('/home', 'client.index')
->middleware([EnsureUserIsAuthenticated::class])
->name('client');

