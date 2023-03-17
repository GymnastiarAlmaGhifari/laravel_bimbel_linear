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
        Schema::create('jadwals', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nama');
            $table->timestamps();
        });
        Schema::create('jadwal_details', function (Blueprint $table) {
            $table->string('id');
            $table->enum('hari', ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']);
            $table->string('id_sesi');
            $table->string('id_mapel');
            $table->string('id_tentor');
            $table->string('id_ruang');
            $table->timestamps();
        });
        Schema::create('sesis', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nama');
            $table->time('jam_mulai');
            $table->time('jam_selesai');
            $table->timestamps();
        });
        Schema::create('ruangs', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nama');
            $table->timestamps();
        });
        Schema::table('jadwal_details', function (Blueprint $table) {
            $table->foreign('id')->references('id')->on('jadwals');
            $table->foreign('id_sesi')->references('id')->on('sesis');
            $table->foreign('id_mapel')->references('id')->on('mapels');
            $table->foreign('id_tentor')->references('id')->on('admins');
            $table->foreign('id_ruang')->references('id')->on('ruangs');
            
        });
        Schema::table('programs', function (Blueprint $table) {
            $table->foreign('id_jadwal')->references('id')->on('jadwals');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('programs', function (Blueprint $table) {
            $table->dropForeign('programs_id_jadwal_foreign');
        });
        Schema::table('jadwal_details', function (Blueprint $table) {
            $table->dropForeign('jadwal_details_id_foreign');
            $table->dropForeign('jadwal_details_id_sesi_foreign');
            $table->dropForeign('jadwal_details_id_mapel_foreign');
            $table->dropForeign('jadwal_details_id_tentor_foreign');
            $table->dropForeign('jadwal_details_id_ruang_foreign');
        });
        Schema::dropIfExists('ruangs');
        Schema::dropIfExists('sesis');
        Schema::dropIfExists('detail_jadwals');
        Schema::dropIfExists('jadwals');
    }
};
