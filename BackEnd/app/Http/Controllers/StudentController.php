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

    public function editProfile(Request $request, Student $student){
       
    }
}
