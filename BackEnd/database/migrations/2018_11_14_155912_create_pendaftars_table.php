<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePendaftarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pendaftars', function (Blueprint $table) {
            $table->increments('id_pendaftar')->unique();
            $table->integer('id_beasiswa')->unsigned();
            $table->integer('id_user')->unsigned();
            $table->integer('status');
            $table->string('alamat_berkas');
            $table->timestamps();

            //$table->foreign('id_user')->references('id_user')->on('students')->onDelete('CASCADE');
            //$table->foreign('id_beasiswa')->references('id_beasiswa')->on('beasiswas')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pendaftars');
    }
}
