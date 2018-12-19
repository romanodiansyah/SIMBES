<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class pendaftar extends Model
{
    //
        //
        use Notifiable;
        protected $table = 'pendaftars';
        protected $primaryKey = 'id_pendaftar';
    
        protected $fillable = [
            'id_pendaftar','id_beasiswa','id_user','status','alamat_berkas','status_aktif',
        ];
    
        protected $hidden = [
        ];

        public function student()
    {
        return $this->belongsTo('App\Student','id_user','id_user');
    }
    public function beasiswa()
    {
        return $this->belongsTo('App\Beasiswa','id_beasiswa','id_beasiswa');
    }
}
