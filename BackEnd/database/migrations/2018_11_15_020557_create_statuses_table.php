<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statuses', function (Blueprint $table) {
            $table->integer('id_pendaftar')->unsigned();
            $table->integer('id_notifikasi')->unsigned();
            $table->timestamps();

            $table->foreign('id_pendaftar')->references('id_pendaftar')->on('pendaftars')->onDelete('cascade');
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
        Schema::dropIfExists('statuses');
    }
}
