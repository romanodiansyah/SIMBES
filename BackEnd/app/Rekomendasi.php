<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Rekomendasi extends Model
{
    //
    use Notifiable;
    protected $table = 'rekomendasis';

    protected $fillable = [
        'id_notifikasi','id_beasiswa','id_user','status'
    ];

    protected $hidden = [
    ];
}
