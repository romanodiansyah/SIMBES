<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotifikasisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifikasis', function (Blueprint $table) {
            $table->increments('id_notifikasi')->unqiue();
            $table->integer('id_user')->unsigned();
            $table->integer('status');
            $table->timestamps();

            $table->foreign('id_user')->references('id_user')->on('students')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notifikasis');
    }
}
