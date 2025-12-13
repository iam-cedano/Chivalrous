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
            __DIR__.'/../routes/api/carts.php',
        ],
        commands: __DIR__.'/../routes/commands.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->redirectGuestsTo(fn (Request $request) => 
            $request->is('api/*') || $request->expectsJson() 
                ? route('auth.login') 
                : '/'
        );
        
        $middleware->api(prepend: [
            \Illuminate\Cookie\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
        ]);
        
        $middleware->statefulApi();
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->dontReportDuplicates();
        
        $exceptions->level(NotFoundResourceException::class, LogLevel::INFO);
        $exceptions->level(ValidationException::class, LogLevel::INFO);
        
        $exceptions->render(function (\Throwable $e, Request $request) {
            # ToDo: Remove config('app.debug') before deploying
            if (($request->is('api/*') || $request->expectsJson()) && config('app.debug') == false ) {
                $statusCode = match (true) {
                    $e instanceof \Illuminate\Auth\AuthenticationException => 401,
                    $e instanceof AuthorizationException => 403,
                    $e instanceof \Illuminate\Database\Eloquent\ModelNotFoundException => 404,
                    $e instanceof NotFoundResourceException => 404,
                    $e instanceof ValidationException => 422,
                    $e instanceof \Symfony\Component\HttpKernel\Exception\HttpException => $e->getStatusCode(),
                    default => 500,
                };
                
                return response()->json([], $statusCode);
            }

            return response()->json([
                'message' => $e->getMessage(),
                'trace' => $e->getTrace()
            ]);
        });
    })->create();
