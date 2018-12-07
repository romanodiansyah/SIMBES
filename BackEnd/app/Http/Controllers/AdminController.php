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
        $this->validate($request, [
            'nama'          => 'required',
            'email'         => 'required|email|unique:students',
            'jenis_kelamin' => 'required',
            'password'      => 'required|min:6',
            'jurusan'       => 'required',
            'fakultas'      => 'required',
            'status_aktif'  => 'required'
        ]);

        $student = $student->find($student->id_user);
        $student->update([
            'nama'          => request('nama'),
            'email'         => request('email'),
            'jenis_kelamin' => request('jenis_kelamin'),
            'password'      => bcrypt(request('password')),
            'api_token'     => bcrypt(request('api_token')),
            'alamat'        => request('alamat'),
            'telepon'       => request('telepon'),
            'no_hp'         => request('no_hp'),
            'status_aktif'  => request('status_aktif'),
            'jurusan'       => request('jurusan'),
            'fakultas'      => request('fakultas'),
        ]);

        return fractal()
            ->item($student)
            ->transformWith(new studentTransformer)
            ->toArray();
    }

    public function deactiveStudent(Student $student){
        $student = $student->find($student->id_user);
        if($student->status_aktif == 1){
            $student->update(['status_aktif' => 0]);
        }
        else{
            $student->update(['status_aktif' => 1]);
        }

        return fractal()
        ->item($student)
        ->transformWith(new studentTransformer)
        ->toArray();
    }
}
