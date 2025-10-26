<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class ClientController extends Controller
{
    public function showHomePage(Request $request): View {
        return view('client.index');
    }
}
