<?php

namespace App\Transformers;

use App\Pendaftar;
use League\Fractal\TransformerAbstract;

class PendaftarTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Pendaftar $pendaftar)
    {
        return [
            'id_pendaftar'  =>  $pendaftar->id_pendaftar,
            'id_beasiswa'   => $pendaftar->id_beasiswa,
            'id_user'       => $pendaftar->status,
            'alamat_berkas' => $pendaftar->alamat_berkas,
            'status_aktif' => $pendaftar->status_aktif,
            'status'  =>  $pendaftar->status,
            'nama_user' =>$pendaftar->student->nama,
            'email' => $pendaftar->student->email,
            'nama_beasiswa' => $pendaftar->beasiswa->nama,

        ];
    }
}
