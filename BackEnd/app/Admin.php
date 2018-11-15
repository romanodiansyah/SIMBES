<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $fillable = [
        'id_adm','no_pegawai','nama','jenis_kelamin','email','password','status_aktif','status_akses',
    ];
}