<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class ClientController extends Controller
{

    public function orders(Request $request): View {
        
        return view('client.orders');
    }   
}
