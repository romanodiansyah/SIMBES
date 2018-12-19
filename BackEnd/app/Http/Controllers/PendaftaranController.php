<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\pendaftar;
use App\Student;
use App\Beasiswa;
use Auth;
//use App\Transformers\PendaftarTransformer;
use Illuminate\Support\Facades\Input;
use App\Transformers\StudentTransformer;
use Carbon\Carbon;

class PendaftaranController extends Controller
{
    //
    public function createPendaftar(Request $request, pendaftar $pendaftar)
    {
        $this->validate($request,[
            'id_beasiswa'       => 'required',
            'id_user'           => 'required',
            'status'            => 'required',
            'status_aktif'      => 'required',
        ]);

        $pendaftar = pendaftar::create([
            'id_beasiswa'       => $request->id_beasiswa,
            'id_user'           => $request->id_user,
            'status'            => $request->status,
            'status_aktif'      => $request->status_aktif,
            'alamat_berkas'     => 0,
        ]);
        if ($request->hasFile('alamat_berkas')){
            $ext = Input::file('alamat_berkas')->getClientOriginalExtension();
            $path = $request->alamat_berkas->storeAs('beasiswa/'.$pendaftar->id_beasiswa."/berkaspendaftar",$pendaftar->id_beasiswa.'.'.$ext);
            $pendaftar->alamat_berkas=$path;
            $pendaftar->save();
            }
        return response()->json($pendaftar, 201); 
    }

}
