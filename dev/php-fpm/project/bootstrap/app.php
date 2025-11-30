<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: [
            __DIR__.'/../routes/web/auth.php',
            __DIR__.'/../routes/web/admin.php',
            __DIR__.'/../routes/web/client.php',
            __DIR__.'/../routes/web/global.php'
        ],
        api: [
            __DIR__.'/../routes/api/services.php',
            __DIR__.'/../routes/api/users.php'
        ],
        commands: __DIR__.'/../routes/commands.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->redirectGuestsTo('/');
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        
    })->create();
