<?php
use App\Http\Middleware\EnsureUserIsAuthenticated;
use Illuminate\Support\Facades\Route;

Route::view('/home', 'client.index')
->middleware([EnsureUserIsAuthenticated::class])
->name('client');