<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Admin;
use App\Http\Requests;
use App\Transformers\AdminTransformer;
use App\Student;
use App\Beasiswa;
use App\pendaftar;
use App\Transformers\StudentTransformer;
use Auth;
use Excel;
use App\Exports\ExportPendaftar;
class AdminController extends Controller
{
    public function admins(Admin $admin){
        $admins = $admin->latest()->paginate(10);

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

    public function update(Request $request, Admin $admin){
        $admin = $admin->find(Auth::user()->id_adm);
        $admin->no_pegawai = $request->get('no_pegawai',$admin->no_pegawai);
        $admin->nama = $request->get('nama',$admin->nama);
        $admin->jenis_kelamin = $request->get('jenis_kelamin',$admin->jenis_kelamin);
        $admin->email = $request->get('email',$admin->email);
        $admin->save();

        return fractal()
            ->item($admin)
            ->transformWith(new AdminTransformer)
            ->addMeta([
                'updated' => $request->all()
            ])
            ->toArray();
    }

    public function deactivate(Admin $admin){
        if($admin->status_aktif == 1){
            $admin->update(['status_aktif' => 0]);
            $msg = 'Deactivated';
        }
        else{
            $admin->update(['status_aktif' => 1]);
            $msg = 'Deactivated';
        }

        return fractal()
        ->item($admin)
        ->transformWith(new AdminTransformer)
        ->addMeta([
            'message' => $msg
        ])
        ->toArray();
    }

    // STUDENT
    public function listStudent(Student $student){
        $students = $student->all();

        return fractal()
            ->collection($students)
            ->transformWith(new StudentTransformer)
            ->toArray();        
    }

    public function readStudent(Student $student){
        $student = $student->find($student->id_user);

        return fractal()
            ->item($student)
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
            ->addMeta([
                'updated' => $request->all()
            ])
            ->toArray();
    }

    public function deactivateStudent(Student $student){
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

    public function export_excel(Request $request)
    {
        $this->validate($request, [
            'id_beasiswa'          => 'required',
        ]);
        
        $beasiswa = Beasiswa::where('id_beasiswa','=',$request->id_beasiswa)->first();
        ob_clean();
        return Excel::download(new ExportPendaftar($beasiswa->id_beasiswa),
        "Pendaftar Beasiswa-".$beasiswa->nama.'.xlsx');
    }
}
