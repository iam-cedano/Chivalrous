<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class NotFoundResourceException extends Exception
{
 
    public function report(): void
    {
    }


    public function render(Request $request): JsonResponse
    {
        return response()->json(['message' => 'Not found resource.'], 400);
    }
}
