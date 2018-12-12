<?php

    namespace App\Transformers;

    use App\Berita;
    use League\Fractal\TransformerAbstract;

    class BeritaTransformer extends TransformerAbstract
    {
        public function transform(Berita $berita)
        {
            return [
                'id_berita'     => $berita->id_berita,
                'id_adm'        => $berita->id_adm,
                'nama_adm'      => $berita->admin->nama,
                'judul'         => $berita->judul,
                'deskripsi'     => $berita->deskripsi,
                'status_aktif'  => $berita->status_aktif,
                'created'       => $berita->created_at->diffForHumans(),
                'updated'       => $berita->updated_at->diffForHumans(),
            ];
        }
    }