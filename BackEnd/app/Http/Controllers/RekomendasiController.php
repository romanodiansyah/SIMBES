<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Rekomendasi;
use App\Http\Controllers\NotifikasiController;

class RekomendasiController extends Controller implements NotifikasiController
{
    //
    public function createRekomendasi(Request $request, Rekomendasi $rekomendasi){
        $this->validate($request, [
            'id_beasiswa'       => 'required',
            'id_user'            => 'required',
        ]);
        
        $rekomendasi = $rekomendasi([
            'id_user'       => $request->id_user,
            'status'        => 0,
            'id_beasiswa'   => $request->id_beasiswa,
        ]);

        return response()->json($rekomendasi,201);
    }

    public function checkRekomendasi(Request $request)
    {
        $this->validate($request, [
            'id_user'            => 'required',
        ]);

        $rekomendasi = Rekomendasi::where('id_user','=',$request->id_user)->get();

        if($rekomendasi->isEmpty())
        {
            return "Tidak ada rekomendasi";
        }
        else{
            return "Ada rekomendasi";
        }
    }
}
