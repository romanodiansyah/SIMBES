<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Status extends Model
{
    //
    //
    use Notifiable;
    protected $table = 'statuses';
    protected $primaryKey = 'id_notifikasi';

    protected $fillable = [
        'id_beasiswa','id_pendaftar','id_user','status'
    ];

    protected $hidden = [
    ];
}
