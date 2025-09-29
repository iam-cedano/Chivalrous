<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class ClientController extends Controller
{
    public function showOrdersPage(Request $request): View {
        return view('client.orders');
    }   

    public function showDashboardPage(Request $request): View {
        return view('client.dashboard');
    }
}
