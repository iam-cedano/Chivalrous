<?php

namespace Infra\Session;

use Domains\Session\Interfaces\AuthMethod;
use Domains\Session\Interfaces\SessionServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class SessionService implements SessionServiceInterface {
    private mixed $secret;

    public function __construct(private Request $request) {}

    public function startSession(AuthMethod $method = AuthMethod::USER_ID): void {
        match($method) {
            AuthMethod::USER_ID => $this->startSessionByUserId(),
            AuthMethod::TOKEN => $this->startSessionByToken(),
        };
    }

    private function startSessionByUserId(): void {
        Auth::guard('web')->loginUsingId($this->secret);
            
        $this->request->session()->regenerate();
    }

    private function startSessionByToken(): void {
        $personalAccessToken = PersonalAccessToken::findToken($this->secret);

        if ($personalAccessToken) {
            $user = $personalAccessToken->tokenable();
            Auth::guard('web')->loginUsingId($user->id);
            $this->request->session()->regenerate();
        }
    }

    public function destroySession(): void {
        Auth::logout();
    }

    public function setSecret(mixed $secret): void {
        $this->secret = $secret;
    }
}