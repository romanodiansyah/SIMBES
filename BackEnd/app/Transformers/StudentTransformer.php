<?php
    namespace App\Transformers;

    use App\Student;
    use League\Fractal\TransformerAbstract;

    class StudentTransformer extends TransformerAbstract
    {
        public function transform(Student $student)
        {
            return [
                'id_user'       => $student->id_user,
                'nama'          => $student->nama,
                'jenis_kelamin' => $student->jenis_kelamin,
                'email'         => $student->email,
                'ipk'           => $student->ipk,
                'no_ktm'        => $student->no_ktm,
                'jenis_identitas'   => $student->jenis_identitas,
                'no_identitas'  => $student->no_identitas,
                'alamat'        => $student->alamat,
                'telepon'       => $student->telepon,
                'no_hp'         => $student->no_hp,
                'jurusan'       => $student->jurusan,
                'fakultas'      => $student->fakultas,
                'alamat_transkrip'  => $student->alamat_transkrip,
                'alamat_kk'     => $student->alamat_kk,
                'alamat_fotodiri'   => $student->alamat_fotodiri,
                'alamat_slipgaji'   => $student->alamat_slipgaji,
                'alamat_sktm'   => $student->alamat_sktm,
                'status_aktif'  => $student->status_aktif,
                'jurusan'       => $student->jurusan,
                'registered'    => $student->created_at->diffForHumans(),
            ];
        }
    }