<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Student extends Authenticatable
{
    use Notifiable;
    protected $guard = 'student-api';
    protected $table = 'students';
    protected $primaryKey = 'id_user';

    protected $fillable = [
        'id_user','nama','jenis_kelamin','email',
        'api_token','password','status_aktif',
        'ipk','no_ktm','jenis_identitas',
        'no_identitas','alamat','telepon','no_hp',
        'jurusan','fakultas', 'alamat_transkrip',
        'alamat_kk', 'alamat_fotodiri','alamat_kk',
        'alamat_slipgaji','alamat_sktm'
    ];

    protected $hidden = [
        'password','api_token'
    ];

    public function student()
    {
        return $this->hasOne('App\Student','id_user');
    }
}