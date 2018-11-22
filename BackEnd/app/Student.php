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
        'status_akses','ipk','no_ktm','jenis_identitas',
        'no_identitas','alamat','telepon','no_hp',
        'jurusan','fakultas'
    ];

    protected $hidden = [
        'password','api_token'
    ];
}