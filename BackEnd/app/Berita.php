<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Berita extends Authenticatable
{
    //
    use Notifiable;
    protected $table = 'beritas';
    protected $primaryKey = 'id_berita';

    protected $fillable = [
        'id_berita','id_adm','judul','deskripsi','status_aktif',
    ];

    protected $hidden = [
    ];

    public function admin()
    {
        return $this->belongsTo('App\Admin','id_adm','id_adm');
    }
}