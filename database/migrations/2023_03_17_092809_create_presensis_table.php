<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('presensis', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->dateTime('tanggal_presensi');
            $table->string('id_siswa');
            $table->enum('status', ['Hadir', 'Sakit', 'Izin', 'Alfa']);
            $table->timestamps();
        });
        Schema::table('presensis', function (Blueprint $table) {
            $table->foreign('id_siswa')->references('id')->on('siswas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('presensis', function (Blueprint $table) {
            $table->dropForeign('presensis_id_siswa_foreign');
        });
        Schema::dropIfExists('presensis');
    }
};
