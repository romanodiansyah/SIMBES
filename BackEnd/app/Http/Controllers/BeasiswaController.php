<?php

namespace App\Http\Controllers;
use App\Beasiswa;
use Auth;
use App\Transformers\BeasiswaTransformer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class BeasiswaController extends Controller
{
    //
    public function createBeasiswa(Request $request, Beasiswa $beasiswa)
    {
        $this->validate($request, [
            'id_adm'            => 'required',
            'nama'              => 'required',
            'deskripsi'         => 'required',
            'persyaratan'       => 'required',
            'jenjangPendidikan' => 'required',
            'semester'          => 'required',
            'ipkMin'            => 'required',
            'berkas'            => 'required',
            'pembukaan'         => 'required',
            'penutupan'         => 'required',
            'jumlah_daftar'     => 'required',
            'sk'                => 'required',
            'pendonor'          => 'required',
            'status_aktif'      => 'required',
        ]); 
        $beasiswa = $beasiswa->create([
            'id_adm'            => $request->id_adm,
            'nama'              => $request->nama,
            'deskripsi'         => $request->deskripsi,
            'persyaratan'       => $request->persyaratan,
            'jenjangPendidikan' => $request->jenjangPendidikan,
            'semester'          => $request->semester,
            'ipkMin'            => $request->ipkMin,
            'berkas'            => $request->berkas,
            'pembukaan'         => $request->pembukaan,
            'penutupan'         => $request->penutupan,
            'jumlah_daftar'     => $request->jumlah_daftar,
            'sk'                => $request->sk,
            'pendonor'          => $request->pendonor,
            'status_aktif'      => $request->status_aktif,
        ]);
        if ($request->hasFile('alamat_foto')){
           $ext = Input::file('alamat_foto')->getClientOriginalExtension();
           $path = $request->alamat_foto->storeAs('beasiswa/'.$beasiswa->id_beasiswa."/foto",$beasiswa->id_beasiswa.'.'.$ext);
           $beasiswa->alamat_foto=$path;
           $beasiswa->save();
        }
        if ($request->hasFile('alamat_berkas')){
            $ext = Input::file('alamat_berkas')->getClientOriginalExtension();
            $path = $request->alamat_berkas->storeAs('beasiswa/'.$beasiswa->id_beasiswa."/berkas",$beasiswa->id_beasiswa.'.'.$ext);
            $beasiswa->alamat_berkas=$path;
            $beasiswa->save();
         }
        return response()->json($beasiswa, 201);

    }
    public function updateBeasiswa(Request $request, Beasiswa $beasiswa)
    {
        $this->validate($request, [
            'id_beasiswa'       => 'required',
            'id_adm'            => 'required',
        ]);

        $beasiswa = Beasiswa::findOrFail($request->id_beasiswa);
        
        $beasiswa->update($request->except('alamat_foto','alamat_berkas'));
        if ($request->hasFile('alamat_foto')){
            $ext = Input::file('alamat_foto')->getClientOriginalExtension();
            $path = $request->alamat_foto->storeAs('beasiswa/'.$beasiswa->id_beasiswa."/foto",$beasiswa->id_beasiswa.'.'.$ext);
            $beasiswa->alamat_foto=$path;
            $beasiswa->save();
         }
         if ($request->hasFile('alamat_berkas')){
             $ext = Input::file('alamat_berkas')->getClientOriginalExtension();
             $path = $request->alamat_berkas->storeAs('beasiswa/'.$beasiswa->id_beasiswa."/berkas",$beasiswa->id_beasiswa.'.'.$ext);
             $beasiswa->alamat_berkas=$path;
             $beasiswa->save();
          }
        return $beasiswa;
    }
    public function deleteBeasiswa(Request $request, Beasiswa $beasiswa)
    {
        $this->validate($request, [
            'id_beasiswa'       => 'required',
        ]);
        
        $beasiswa = Beasiswa::findOrFail($request->id_beasiswa);
        if($beasiswa->status_aktif == 0)
        {
            $beasiswa->update(['status_aktif => 1']);
        }
        else
        {
            $beasiswa->update(['status_aktif => 0']);
        }
        return $beasiswa;
    }

    public function readBeasiswa(Beasiswa $beasiswa)
    {
        $beasiswa = $beasiswa->all();

        return fractal()
            ->collection($beasiswa)
            ->transformWith(new BeasiswaTransformer)
            ->toArray();
    }

    public function search($key){
        $beasiswa = Beasiswa::where('nama','LIKE','%'.$key.'%')
            ->orwhere('deskripsi','LIKE','%'.$key.'%')
            ->orwhere('persyaratan','LIKE','%'.$key.'%')
            ->orwhere('jenjangPendidikan','LIKE','%'.$key.'%')
            ->orwhere('semester','LIKE','%'.$key.'%')
            ->orwhere('ipkMin','LIKE','%'.$key.'%')
            ->orwhere('pendonor','LIKE','%'.$key.'%')
            ->latest()->paginate(10);
        
        return fractal()
            ->collection($beasiswa)
            ->transformWith(new BeasiswaTransformer)
            ->toArray();    
    }
}
