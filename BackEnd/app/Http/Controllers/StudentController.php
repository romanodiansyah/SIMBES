<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;
use App\Transformers\StudentTransformer;
use Auth;

class StudentController extends Controller
{
    public function home(Student $student){
        $student = $student->find(Auth::user()->id_user);

        return fractal()
            ->item($student)
            ->transformWith(new studentTransformer)
            ->toArray();
    }

    public function updateProfile(Request $request, Student $student){
        $student = $student->find(Auth::user()->id_user);

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
