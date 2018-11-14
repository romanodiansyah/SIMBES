<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('students', function(Blueprint $table){
            $table->increments('id_user');
            $table->string('nama');
            $table->integer('jenis_kelamin');
            $table->string('email');
            $table->string('password');
            $table->string('status_aktif');
            $table->string('status_akses');
            $table->double('ipk');
            $table->string('no_ktm');
            $table->string('jenis_identitas');
            $table->string('no_identitas');
            $table->string('alamat');
            $table->string('telepon');
            $table->string('no_hp');
            $table->integer('jurusan');
            $table->integer('fakultas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('students');
    }
}
