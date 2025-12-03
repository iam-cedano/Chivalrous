<?php

namespace Http\Controllers;

use Illuminate\View\View;

class AdminController extends Controller
{
    public function showUsersPage(): View {
        return view('admin.users');
    }  

    public function showDashboardPage(): View {
        return view('admin.dashboard');
    }
}
