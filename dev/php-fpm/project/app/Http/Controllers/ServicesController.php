<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
 
    public function index(): JsonResponse
    {
        return response()->json([
            'message' => 'OK! Endpoint working'
        ])->setStatusCode(200);
    }

    public function store(Request $request)
    {
        //
    }

    
    public function show(string $id)
    {
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
