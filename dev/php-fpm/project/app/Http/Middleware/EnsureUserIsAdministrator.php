<?php

namespace Http\Middleware;

use Closure;
use Models\UserModel as User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserIsAdministrator
{
    public function handle(Request $request, Closure $next): Response
    {
        Gate::allowIf(fn (User $user) => $user->isAdministrator());

        return $next($request);
    }
}
