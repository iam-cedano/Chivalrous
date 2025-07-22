<?php
use App\Http\Controllers\SmmProviderController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/users/login', function(UserController $user) {
    return $user->login();
});

Route::get('/', function() {
    return "<h1>Hello World</h1>";
});

Route::get('/', function() {
    return view('welcome');
});

