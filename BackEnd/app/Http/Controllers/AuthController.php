<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Admin;
use App\Transformers\AdminTransformer;
use Auth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function register(Request $request, Admin $admin)
    {
        $this->validate($request, [
            'no_pegawai'    => 'required|unique:admins',
            'nama'          => 'required',
            'jenis_kelamin' => 'required',
            'email'         => 'required|email|unique:admins',
            'password'      => 'required|min:6',
        ]); 

        $admin = $admin->create([
            'no_pegawai'    => $request->no_pegawai,
            'nama'          => $request->nama,
            'jenis_kelamin' => $request->jenis_kelamin,
            'email'         => $request->email,
            'api_token'     => bcrypt($request->email),
            'password'      => bcrypt($request->password),
            'status_aktif'  => 1,
            'status_akses'  => 1
        ]);

        $response = fractal()
            ->item($admin)
            ->transformWith(new AdminTransformer)
            ->addMeta([
                'token' => $admin->api_token
            ])
            ->toArray();

        return response()->json($response, 201);
    }

    public function login(Request $request, Admin $admin){
        if(!Auth::guard('admin')->attempt(['email'=> $request->email,
            'password'=> $request->password]))
        {
            return response()->json(['error' => 'email/password anda salah', 401]);
        }

        $admin = $admin->find(Auth::guard('admin')->user()->id_adm);

        $response = fractal()
            ->item($admin)
            ->transformWith(new AdminTransformer)
            ->addMeta([
                'token' => $admin->api_token
            ])
            ->toArray();
        
        return response()->json($response, 201);
    }
}
