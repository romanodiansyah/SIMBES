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
                'registered'    => $student->created_at->diffForHumans(),
            ];
        }
    }