<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRekomendasisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rekomendasis', function (Blueprint $table) {
            $table->integer('id_beasiswa')->unsigned();
            $table->integer('id_notifikasi')->unsigned();
            $table->timestamps();

            $table->foreign('id_beasiswa')->references('id_beasiswa')->on('beasiswas')->onDelete('cascade');
            $table->foreign('id_notifikasi')->references('id_notifikasi')->on('notifikasis')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rekomendasis');
    }
}
