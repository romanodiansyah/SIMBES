<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function admins(Admin $admin){
        $admins = $admin->all();

        return response()->json($admins);
    }
}
