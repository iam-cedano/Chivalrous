<?php

namespace Http\Middleware;

use App\Models\UserModel as User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserIsAdministrator
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        Gate::allowIf(fn (User $user) => $user->isAdministrator());

        return $next($request);
    }
}
