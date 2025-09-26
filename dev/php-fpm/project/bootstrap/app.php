<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;


return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: [
            __DIR__.'/../routes/web/auth.php',
            __DIR__.'/../routes/web/admin.php',
            __DIR__.'/../routes/web/client.php',
        ],
        api: [
            __DIR__.'/../routes/api/auth.php'
        ],
        commands: __DIR__.'/../routes/commands.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->redirectGuestsTo(fn (Request $request) => route('auth.login'));
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
