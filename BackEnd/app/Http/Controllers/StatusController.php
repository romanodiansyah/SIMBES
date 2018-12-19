<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Status;

class StatusController extends Controller
{
    //
    public function createNotif(Request $request, Status $status){
        $this->validate($request, [
            'id_beasiswa'       => 'required',
            'id_user'            => 'required',
        ]);
        if(!$request->has('id_pendaftar')){
        $status = $status->create([
            'id_user'       => $request->id_user,
            'status'        => 0,
            'id_beasiswa'   => $request->id_beasiswa,
            'id_pendaftar'  => 0,
        ]);}
        if(!$request->has('id_beasiswa')){
            $status = $status->create([
                'id_user'       => $request->id_user,
                'status'        => 0,
                'id_beasiswa'   => 0,
                'id_pendaftar'  => $request->id_pendaftar,
            ]);}

        return response()->json($status,201);
    }

    public function checkNotif(Request $request)
    {
        $this->validate($request, [
            'id_user'            => 'required',
        ]);

        $notifikasi = Status::where('id_user','=',$request->id_user)->get();
        $count = count($notifikasi);
        if($notifikasi->isEmpty())
        {
            return "Tidak ada notifikasi";
        }
        else{
            return response()->json($notifikasi,201);
            return "ADA NOTIFIKASI JUMLAH".$count;
        }
    }

    public function readNotif(Request $request)
    {
        $this->validate($request, [
            'id_notifikasi'            => 'required',
        ]);

        $notifikasi = Status::where('id_notifikasi','=',$request->id_notifikasi)->first();
        $notifikasi = $notifikasi->update(['status => 1']);

    }
}
