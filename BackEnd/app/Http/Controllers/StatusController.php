<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StatusController extends Controller
{
    //
    public function createNotif(Request $request, Notifikasi $notifikasi){
        $this->validate($request, [
            'id_beasiswa'       => 'required',
            'id_user'            => 'required',
        ]);
        
        $notifikasi = $notifikasi->create([
            'id_user'       => $request->id_user,
            'status'        => 0,
            'id_beasiswa'   => $request->id_beasiswa,
        ]);

        return response()->json($notifikasi,201);
    }

    public function checkNotif(Request $request)
    {
        $this->validate($request, [
            'id_user'            => 'required',
        ]);

        $notifikasi = Notifikasi::where('id_user','=',$request->id_user)->get();

        if($notifikasi->isEmpty())
        {
            return "Tidak ada rekomendasi";
        }
        else{
            return "Ada rekomendasi";
        }
    }

    public function readNotif(Request $request)
    {
        $this->validate($request, [
            'id_notifikasi'            => 'required',
        ]);

    

        

    }
}
