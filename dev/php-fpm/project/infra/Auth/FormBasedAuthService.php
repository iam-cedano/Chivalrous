<?php

namespace Infra\Auth;

use Domains\Auth\Interfaces\AuthServiceInterface;
use Domains\Auth\DTOs\FormRequestDto;
use Domains\Auth\DTOs\LoginResponseDto;
use Illuminate\Support\Facades\Auth;

class FormBasedAuthService implements AuthServiceInterface {
    public function __construct() {}
    public function login(): LoginResponseDto {
        $credentials = request()->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        $username = $credentials['username'];
        $password = $credentials['password'];

        $formRequestDto = new FormRequestDto($username, $password);

        $response = null;

        if (! Auth::guard('web')->attempt($formRequestDto->toArray()) ) {
            $response = new LoginResponseDto(400, 'Credentials don\'t match');
            
            return $response;
        }

        $response = new LoginResponseDto(200, 'OKAY');
        
        $response->setRedirect("/home");

        return $response;
    }
}