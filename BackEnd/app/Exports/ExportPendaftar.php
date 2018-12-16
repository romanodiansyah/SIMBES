<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use App\Models\Company;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;
use App\Student;
use App\Beasiswa;
use App\pendaftar;

class ExportPendaftar implements FromCollection,WithHeadings, WithEvents
{
    /**
    * @return \Illuminate\Support\Collection
    */
    function __construct($init_parameter) {
        $this->id_beasiswa = $init_parameter;
    }
    
    public function headings(): array
    {
        return ['Nama','Jenis Kelamin','Email','IPK','NIM',
        'Jenis Identitas','Nomor Identitas','Alamat',
        'Nomor Telepon','Nomor Handphone','Jurusan',
        'Fakultas','Transkrip','KK','Foto Diri','Slip Gaji','SKTM'];
    }

    public function registerEvents(): array
    {
        return [            
            AfterSheet::class => function(AfterSheet $event) {
                $event->sheet->freezePane('A2', 'A2');
            },
        ];
    }
    public function collection()
    {
        //
        $beasiswa = Beasiswa::where('id_beasiswa','=',$this->id_beasiswa)->first();
        $pendaftars = pendaftar::where('id_beasiswa','=',$this->id_beasiswa)->get();
        if($pendaftars->isEmpty()){
            return 'Tidak ada pendaftar!';
        }
        foreach ($pendaftars as $pendaftar){
            $studentsall[]  = Student::where('id_user','=',$pendaftar->id_user)
            ->first();
        }
        $studentsall = collect($studentsall);
        $students = $studentsall->map(function ($studentsall) {
            return collect($studentsall->toArray())
                ->only(['nama','jenis_kelamin','email','ipk','no_ktm',
                'jenis_identitas','no_identitas','alamat',
                'telepon','no_hp','jurusan',
                'fakultas','alamat_transkrip','alamat_kk','alamat_foto',
                'alamat_slipgaji','alamat_sktm'])
                ->all();
        });
        return collect($students);
    }
}
