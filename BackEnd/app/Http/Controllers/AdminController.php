<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Admin;
use App\Http\Requests;
use App\Transformers\AdminTransformer;
use App\Student;
use App\Transformers\StudentTransformer;
use Auth;

class AdminController extends Controller
{
    public function admins(Admin $admin){
        $admins = $admin->all();

        return fractal()
            ->collection($admins)
            ->transformWith(new AdminTransformer)
            ->toArray();
    }

    public function home(Admin $admin){
        $admin = $admin->find(Auth::user()->id_adm);

        return fractal()
            ->item($admin)
            ->transformWith(new AdminTransformer)
            ->toArray();
    }

    public function listStudent(Student $student){
        $students = $student->all();

        return fractal()
            ->collection($students)
            ->transformWith(new StudentTransformer)
            ->toArray();        
    }

    public function updateStudent(Request $request, Student $student){
        $student = $student->find($student->id_user);
        $student->nama = $request->nama;
        $student->email = $request->email;
        $student->jenis_kelamin = $request->jenis_kelamin;
        $student->password = bcrypt($request->jenis_password);
        $student->api_token = bcrypt($request->email);
        $student->alamat = $request->alamat;
        $student->telepon = $request->telepon;
        $student->no_hp = $request->no_hp;
        $student->save();

        return fractal()
            ->item($student)
            ->transformWith(new studentTransformer)
            ->toArray();
    }
}
