<?php
use App\Exceptions\NotFoundResourceException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Psr\Log\LogLevel;

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
            __DIR__.'/../routes/api/users.php',
            __DIR__.'/../routes/api/carts.php'
        ],
        commands: __DIR__.'/../routes/commands.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->redirectGuestsTo('/');
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->dontReportDuplicates();
        
        $exceptions->level(NotFoundResourceException::class, LogLevel::INFO);
        $exceptions->level(ValidationException::class, LogLevel::INFO);
        
        $exceptions->render(function (ValidationException $e, Request $request) {
            if ($request->is('api/*') || $request->expectsJson()) {
                return response()->json([
                    'message' => $e->getMessage(),
                    'reasons' => $e->errors()
                ], 422);
            }
        });

        $exceptions->render(function (AuthorizationException $e, Request $request) {
            if ($request->is('api/*') || $request->expectsJson()) {
                return response()->json([
                    'message' => 'Not authorized user',
                ], 403);
            }
            
            return to_route('auth.login');
        });
    })->create();
