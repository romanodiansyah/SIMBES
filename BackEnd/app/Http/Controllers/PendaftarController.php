<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\pendaftar;
use Auth;
//use App\Transformers\PendaftarTransformer;
use Illuminate\Support\Facades\Input;

class PendaftarController extends Controller
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
        $pendaftar = $pendaftar->create([
            'id_pendaftar'      => $request->id_pendaftar,
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

    public function deletePendaftar(Request $request, pendaftar $pendaftar)
    {
        $this->validate($request,[
            'id_pendaftar' => 'required',
        ]);

        $pendaftar = pendaftar::findOrFail($request->id_pendaftar);
        if($pendaftar->status_aktif == 0)
        {
            $pendaftar->update(['status_aktif => 1']);
        }
        else
        {
            $pendaftar->update(['status_aktif => 0']);
        }
        return $pendaftar;

    }
    public function updatePendaftar(Request $request, pendaftar $pendaftar)
    {
        $this->validate($request, [
            'id_pendaftar'       => 'required',
        ]);

        $pendaftar = pendaftar::findOrFail($request->id_beasiswa);
        
        $pendaftar->update($request->except('alamat_berkas'));
         if ($request->hasFile('alamat_berkas')){
             $ext = Input::file('alamat_berkas')->getClientOriginalExtension();
             $path = $request->alamat_berkas->storeAs('beasiswa/'.$pendaftar->id_beasiswa."/berkas/pendaftar",$pendaftar->id_pendaftar.'.'.$ext);
             $pendaftar->alamat_berkas=$path;
             $pendaftar->save();
          }
        return $pendaftar;
    }
}
