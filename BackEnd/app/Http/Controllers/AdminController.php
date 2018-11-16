<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Admin;
use App\Http\Requests;
use App\Transformers\AdminTransformer;

class AdminController extends Controller
{
    public function admins(Admin $admin){
        $admins = $admin->all();

        return fractal()
            ->collection($admins)
            ->transformWith(new AdminTransformer)
            ->toArray();
    }
}
