<?php

namespace Infrastructure\Auth;

use Domain\Auth\FormRequestDto;
use Domain\Auth\LoginResponseDto;
use Domian\Auth\AuthServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FormBasedAuthService implements AuthServiceInterface {

    public function __construct(private Request $request) {

    }

    public function login(): LoginResponseDto {
        $credentials = $this->request->validate([
            'username',
            'password'
        ]);

        $username = $credentials['username'];
        $password = $credentials['password'];

        $formRequestDto = new FormRequestDto($username, $password);

        if (! Auth::guard('web')->attempt($formRequestDto->toArray()) ) {
            return new LoginResponseDto(400, 'Credentials don\'t match');
        }

        return new LoginResponseDto(200, 'Everything okay!');
    }

}