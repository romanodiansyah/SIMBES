<?php

    namespace App\Transformers;

    use App\Admin;
    use League\Fractal\TransformerAbstract;

    class AdminTransformer extends TransformerAbstract
    {
        public function transform(Admin $admin)
        {
            return [
                'nama' => $admin->nama,
                'email' => $admin->email,
                'registered' => $admin->created_at->diffForHumans(),
            ];
        }
    }