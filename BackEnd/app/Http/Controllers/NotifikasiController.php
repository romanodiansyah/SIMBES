<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Beasiswa;
use Auth;
use App\Admin;
use App\Transformers\BeasiswaTransformer;
use Illuminate\Support\Facades\Input;

class NotifikasiController extends Controller
{
    //
    
    function __construct($init_parameter) {
        $this->id_user = $init_parameter;
    }
    
    public function setNotif()
    {
        
    }
}
