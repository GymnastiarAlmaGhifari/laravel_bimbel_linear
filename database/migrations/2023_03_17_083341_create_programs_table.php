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
        Schema::create('programs', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nama');
            $table->enum('tipe', ['Private', 'Semi Private', 'Kelompok']);
            $table->enum('level', ['Premium', 'Regular']);
            $table->string('id_jadwal');
            $table->timestamps();
        });
        Schema::table('programs', function (Blueprint $table) {
            $table->foreign('id_jadwal')->references('id')->on('jadwals');
        });
        Schema::create('program_details', function (Blueprint $table) {
            $table->string('id');
            $table->string('id_siswa');
            $table->timestamps();
        });
        Schema::table('program_details', function (Blueprint $table) {
            $table->foreign('id')->references('id')->on('programs');
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
        Schema::table('program_details', function (Blueprint $table) {
            $table->dropForeign('program_details_id_foreign');
            $table->dropForeign('program_details_id_siswa_foreign');
        });
        Schema::dropIfExists('program_details');
        Schema::dropIfExists('programs');
    }
};
