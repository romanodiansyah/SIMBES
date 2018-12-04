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
            "nama"              => $beasiswa->nama,
            "deskripsi"         => $beasiswa->deskripsi,
            "persyaratan"       => $beasiswa->persyaratan,
            "jenjangPendidikan" => $beasiswa->jenjangPendidikan,
            "semester"          => $beasiswa->semester,
            "ipkMin"            => $beasiswa->ipkMin,
            "berkas"            => $beasiswa->berkas,
            "pembukaan"         => $beasiswa->pembukaan,
            "penutupan"         => $beasiswa->penutupan,
            "jumlah_daftar"     => $beasiswa->jumlah_daftar,
            "sk"                => $beasiswa->sk,
            "pendonor"          => $beasiswa->pendonor,
            "updated"           => $beasiswa->updated_at->diffForHumans(),
            'registered'        => $beasiswa->created_at->diffForHumans(),
            //
        ];
    }
}
