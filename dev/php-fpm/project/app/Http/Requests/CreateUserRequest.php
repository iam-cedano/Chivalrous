<?php

namespace Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
    protected $stopOnFirstFailure = false;

    public function prepareForValidation() {
        $this->merge([
            'username' => trim($this->username),
            'email' => trim($this->email),
            'password' => trim($this->password)
        ]);
    }

    public function messages() {
        return [
            'username.required' => 'Username is required',
            'email.required' => 'Email is required',
            'password.required' => 'Password is required',
            'email.email' => 'The email field must be a valid email address',
            'password.min' => 'Use 8 characters or more for your password'
        ];
    }

    public function rules(): array
    {
        return [
            'username' => 'required|string|max:30|unique:users,username',
            'email' => 'required|email|max:254|unique:users,email',
            'password' => 'required|string|min:8'
        ];
    }
}
