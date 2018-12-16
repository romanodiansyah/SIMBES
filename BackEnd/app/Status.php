<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    //
    //
    use Notifiable;
    protected $table = 'statuses';

    protected $fillable = [
        'id_notifikasi','id_pendaftar','id_user','status'
    ];

    protected $hidden = [
    ];
}
