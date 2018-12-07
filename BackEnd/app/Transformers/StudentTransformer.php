<?php
    namespace App\Transformers;

    use App\Student;
    use League\Fractal\TransformerAbstract;

    class StudentTransformer extends TransformerAbstract
    {
        public function transform(Student $student)
        {
            return [
                'nama'          => $student->nama,
                'jenis_kelamin' => $student->jenis_kelamin,
                'email'         => $student->email,
                'alamat'        => $student->alamat,
                'telepon'       => $student->telepon,
                'no_hp'         => $student->no_hp,
                'status_aktif'  => $student->status_aktif,
                'jurusan'       => $student->jurusan,
                'fakultas'      => $student->fakultas,
                'registered'    => $student->created_at->diffForHumans(),
            ];
        }
    }