<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Admin;
use App\Transformers\AdminTransformer;
use App\Student;
use App\Transformers\StudentTransformer;
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
            'status_aktif'  => 1
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

    public function loginAdmin(Request $request, Admin $admin){
        if(!Auth::guard('admin')->attempt(['email'=> $request->email,
            'password'=> $request->password]))
        {
            return response()->json(['error' => 'email/password anda salah'], 401);
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

    public function createStudent(Request $request, Student $student)
    {
        $this->validate($request, [
            'nama'          => 'required',
            'jenis_kelamin' => 'required',
            'email'         => 'required|email|unique:students',
            'password'      => 'required|min:6',
            'jurusan'       => 'required',
            'fakultas'      => 'required'
        ]); 
         $student = $student->create([
            'nama'          => $request->nama,
            'jenis_kelamin' => $request->jenis_kelamin,
            'email'         => $request->email,
            'api_token'     => bcrypt($request->email),
            'password'      => bcrypt($request->password),
            'status_aktif'  => 1,
            'jurusan'       => $request->jurusan,
            'fakultas'      => $request->fakultas,
        ]);
         $response = fractal()
            ->item($student)
            ->transformWith(new StudentTransformer)
            ->addMeta([
                'token' => $student->api_token
            ])
            ->toArray();
         return response()->json($response, 201);
    }
     public function loginStudent(Request $request, Student $student){
        if(!Auth::guard('student')->attempt(['email'=> $request->email,
            'password'=> $request->password]))
        {
            return response()->json(['error' => 'email/password anda salah', 401]);
        }
         $student = $student->find(Auth::guard('student')->user()->id_user);
         $response = fractal()
            ->item($student)
            ->transformWith(new StudentTransformer)
            ->addMeta([
                'token' => $student->api_token
            ])
            ->toArray();
        
        return response()->json($response, 201);
    }
}
