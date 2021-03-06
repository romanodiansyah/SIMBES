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
            $table->increments('id_user')->unique();
            $table->string('nama');
            $table->integer('jenis_kelamin');
            $table->string('email');
            $table->string('password');
            $table->string('status_aktif');
            $table->double('ipk')->nullable();
            $table->string('no_ktm')->nullable();
            $table->string('jenis_identitas')->nullable();
            $table->string('no_identitas')->nullable();
            $table->string('alamat')->nullable();
            $table->string('telepon')->nullable();
            $table->string('no_hp')->nullable();
            $table->integer('jurusan')->nullable();
            $table->integer('fakultas')->nullable();
            $table->string('alamat_transkrip')->nullable();
            $table->string('alamat_kk')->nullable();
            $table->string('alamat_fotodiri')->nullable();
            $table->string('alamat_slipgaji')->nullable();
            $table->string('alamat_sktm')->nullable();
            $table->timestamps();
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
