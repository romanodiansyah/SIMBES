<?php

namespace App\Http\Controllers;
use App\Beasiswa;
use Auth;
use App\Transformers\BeasiswaTransformer;
use Illuminate\Http\Request;

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
        
        return response()->json($beasiswa, 201);

    }
    public function updateBeasiswa(Request $request, Beasiswa $beasiswa)
    {
        $this->validate($request, [
            'id_beasiswa'       => 'required',
            'id_adm'            => 'required',
        ]);

        $updatebeasiswa = Beasiswa::findOrFail($request->id_beasiswa);
        
        $updatebeasiswa->update($request->all());
        
        return $updatebeasiswa;
    }
    public function deleteBeasiswa(Request $request, Beasiswa $beasiswa)
    {
        $this->validate($request, [
            'id_beasiswa'       => 'required',
            'status_aktif'      => 'required',
        ]);
        
        $beasiswa = Beasiswa::findOrFail($request->id_beasiswa);
        $beasiswa->update($request->all());
        
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
}
