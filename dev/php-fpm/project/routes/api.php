<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request):User {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/users/login', function(Request $request):User {
    return $request->user();
});
 