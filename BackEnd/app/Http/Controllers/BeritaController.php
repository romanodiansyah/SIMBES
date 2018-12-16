<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Admin;
use App\Transformers\AdminTransformer;
use App\Berita;
use App\Transformers\BeritaTransformer;
use Auth;

class BeritaController extends Controller
{
    public function listBerita(Berita $berita){
        $beritas = $berita->latest()->paginate(5);

        return fractal()
            ->collection($beritas)
            ->transformWith(new BeritaTransformer)
            ->toArray();
    }

    public function readBerita(Berita $berita){
        return fractal()
            ->item($berita)
            ->transformWith(new BeritaTransformer)
            ->toArray();
    }

    public function createNews(Request $request, Berita $berita, Admin $admin){
        $this->validate($request, [
            'judul'     => 'required',
            'deskripsi' => 'required',
        ]);
        
        $admin = $admin->find(Auth::user()->id_adm);
        $berita = $berita->create([
            'id_adm'        => $admin->id_adm,
            'judul'         => $request->judul,
            'deskripsi'     => $request->deskripsi,
            'status_aktif'  => 1,
        ]);

        return fractal()
            ->item($berita)
            ->transformWith(new BeritaTransformer)
            ->toArray();

    }

    public function update(Request $request, Berita $berita){
        $berita->judul = $request->get('judul',$berita->judul);
        $berita->deskripsi = $request->get('deskripsi',$berita->deskripsi);
        $berita->status_aktif = $request->get('status_aktif',$berita->status_aktif);
        $berita->save();

        return fractal()
            ->item($berita)
            ->transformWith(new BeritaTransformer)
            ->addMeta([
                'updated' => $request->all()
            ])
            ->toArray();
    }

    public function deactivate(Berita $berita){
        if($berita->status_aktif == 1){
            $berita->update(['status_aktif' => 0]);
            $msg = 'Deactivated';
        }
        else{
            $berita->update(['status_aktif' => 1]);
            $msg = 'Activated';
        }

        return fractal()
        ->item($berita)
        ->transformWith(new BeritaTransformer)
        ->addMeta([
            'message' => $msg
        ])
        ->toArray();
    }

    public function search($key){
        $beritas = Berita::where('judul','LIKE','%'.$key.'%')
            ->orwhere('deskripsi','LIKE','%'.$key.'%')
            ->latest()->paginate(10);
        
        return fractal()
            ->collection($beritas)
            ->transformWith(new BeritaTransformer)
            ->toArray();    
    }
}
