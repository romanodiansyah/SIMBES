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

use App\Transformers\PendaftarTransformer;
use Carbon\Carbon;

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

        $pendaftar = pendaftar::where('id_beasiswa','=',$request->id_beasiswa)->where('id_user','=',$request->id_user)->get();
        if(!$pendaftar->isEmpty())
        {
            return response()->json(array(
                "code"      =>  "405",
                "message"   => "Anda sudah mendaftar!"),405);        
        }
        $beasiswa = Beasiswa::where('id_beasiswa','=',$request->id_beasiswa)->first();
       //dd($beasiswa);
       $pembukaan = Carbon::parse($beasiswa->pembukaan);
       $penutupan = Carbon::parse($beasiswa->penutupan);
       $datenow = Carbon::parse(date('Y-m-d H:i:s'));
        if($pembukaan > $datenow)
        {
            return response()->json(array(
                "code"      =>  "405",
                "message"   => "Anda sudah mendaftar!"),405);         
        }
        else{
            if($penutupan < $datenow)
            {
                return response()->json(array(
                        "code"      =>  "405",
                        "message"   => "Pendaftaran telah ditutup!"),405);
            }
            else{
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
    public function readPendaftar(Beasiswa $beasiswa, pendaftar $pendaftar)
    {
        $pendaftar = pendaftar::where('id_beasiswa','=',$beasiswa->id_beasiswa)->get();
        // $student = Student::where('id_user','=',$pendaftar->id_user)->get();
        // $baru = 

        return fractal()
            ->collection($pendaftar)
            ->transformWith(new PendaftarTransformer)
            ->toArray();
    }

    public function acceptPendaftar(pendaftar $pendaftar)
    {
        $pendaftar->update(['status' => '2']);

        return response()->json($pendaftar,201);
    }

    public function declinePendaftar(pendaftar $pendaftar)
    {
        $pendaftar->update(['status' => '3']);

        return response()->json($pendaftar,201);
    }
}
