<?php

    namespace App\Transformers;

    use App\Admin;
    use League\Fractal\TransformerAbstract;

    class AdminTransformer extends TransformerAbstract
    {
        public function transform(Admin $admin)
        {
            return [
                'no_pegawai'    => $admin->no_pegawai,
                'nama'          => $admin->nama,
                'jenis_kelamin' => $admin->jenis_kelamin,
                'email'         => $admin->email,
                'status_aktif'  => $admin->status_aktif,
                'registered'    => $admin->created_at->diffForHumans(),
            ];
        }
    }