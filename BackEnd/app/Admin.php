<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Admin extends Authenticatable
{
    use Notifiable;
    protected $table = 'admins';
    protected $primaryKey = 'id_adm';

    protected $fillable = [
        'id_adm','no_pegawai','nama','jenis_kelamin','email',
        'password','status_aktif','api_token'
    ];

    protected $hidden = [
        'password',
    ];

    public function berita()
    {
        return $this->hasMany('App\Berita','id_adm','id_adm');
    }
}