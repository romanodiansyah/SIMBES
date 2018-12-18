<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Beasiswa;

class BeasiswaTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Beasiswa $beasiswa)
    {
        return [
            'id_beasiswa'       => $beasiswa->id_beasiswa,
            'id_adm'            => $beasiswa->id_adm,
            'nama_adm'          => $beasiswa->admin->nama,
            "nama"              => $beasiswa->nama,
            "deskripsi"         => $beasiswa->deskripsi,
            "persyaratan"       => $beasiswa->persyaratan,
            "jenjangPendidikan" => $beasiswa->jenjangPendidikan,
            "semester"          => $beasiswa->semester,
            "ipkMin"            => $beasiswa->ipkMin,
            "berkas"            => $beasiswa->berkas,
            "pembukaan"         => date('Y-m-d\TH:i:s.uP T',strtotime($beasiswa->pembukaan)),
            "penutupan"         => date('Y-m-d\TH:i:s.uP T',strtotime($beasiswa->penutupan)),
            "jumlah_daftar"     => $beasiswa->jumlah_daftar,
            "sk"                => $beasiswa->sk,
            "pendonor"          => $beasiswa->pendonor,
            "alamat_berkas"     => $beasiswa->alamat_berkas,
            "alamat_foto"       => $beasiswa->alamat_foto,
            "updated"           => $beasiswa->updated_at->diffForHumans(),
            'registered'        => $beasiswa->created_at->diffForHumans(),
            'status_aktif'      => $beasiswa->status_aktif,
            //
        ];
    }
}
