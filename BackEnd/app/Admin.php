<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Admin extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'id_adm','no_pegawai','nama','jenis_kelamin','email',
        'password','status_aktif','status_akses','api_token'
    ];

    protected $hidden = [
        'password',
    ];
}