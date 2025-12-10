<?php

namespace Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function getCart(Request $request) {
        return response()->json([
            'name' => 'Oscar Cedano'
        ]);
    }
}
