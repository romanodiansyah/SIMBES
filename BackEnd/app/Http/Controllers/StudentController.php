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
        $this->validate($request, [
            'alamat_transkrip'   => 'file|image|mimes:jpeg,png,pdf,zip,rar|max:2048',
            'alamat_kk'         => 'file|image|mimes:jpeg,png,pdf,zip,rar|max:2048',
            'alamat_fotodiri'   => 'file|image|mimes:jpeg,png,pdf,zip,rar|max:2048',
            'alamat_slipgaji'   => 'file|image|mimes:jpeg,png,pdf,zip,rar|max:2048',
            'alamat_sktm'       => 'file|image|mimes:jpeg,png,pdf,zip,rar|max:2048',
        ]);

        $student = $student->find(Auth::user()->id_user);
        
        $student->alamat = $request->alamat;
        $student->telepon = $request->telepon;
        $student->no_hp = $request->no_hp;
        
        $folder = $student->id_user.'-'.$student->nama;
            
        if($request->hasFile('alamat_transkrip')){
            $file = $request->file('alamat_transkrip');
            $ext = $file->getClientOriginalExtension();
            $path = $file->storeAs('student/berkas/'.$folder, 'transkrip.'.$ext);
            $student->alamat_transkrip = $path;
        }
        if($request->hasFile('alamat_kk')){
            $file = $request->file('alamat_kk');
            $ext = $file->getClientOriginalExtension();
            $path = $file->storeAs('student/berkas/'.$folder, 'kk.'.$ext);
            $student->alamat_kk = $path;
        }
        if($request->hasFile('alamat_fotodiri')){
            $file = $request->file('alamat_fotodiri');
            $ext = $file->getClientOriginalExtension();
            $path = $file->storeAs('student/berkas/'.$folder, 'fotodiri.'.$ext);
            $student->alamat_fotodiri = $path;
        }
        if($request->hasFile('alamat_slipgaji')){
            $file = $request->file('alamat_slipgaji');
            $ext = $file->getClientOriginalExtension();
            $path = $file->storeAs('student/berkas/'.$folder, 'slipgaji.'.$ext);
            $student->alamat_slipgaji = $path;
        }
        if($request->hasFile('alamat_sktm')){
            $file = $request->file('alamat_sktm');
            $ext = $file->getClientOriginalExtension();
            $path = $file->storeAs('student/berkas/'.$folder, 'sktm.'.$ext);
            $student->alamat_sktm = $path;
        }

        $student->save();

        return fractal()
            ->item($student)
            ->transformWith(new studentTransformer)
            ->addMeta([
                'updated' => $request->all()
            ])
            ->toArray();
    }
}
