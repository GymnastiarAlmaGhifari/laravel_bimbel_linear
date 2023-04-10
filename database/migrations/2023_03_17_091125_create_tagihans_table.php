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
        Schema::create('tagihans', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('id_siswa');
            $table->integer('jumlah_tagihan');
            $table->dateTime('tanggal_tagihan')->nullable();
            $table->dateTime('jatuh_tempo');
            $table->enum('status', ['Belum Lunas', 'Jatuh Tempo', 'Pending', 'Lunas']);
            $table->string('nota');
            $table->timestamps();
        });
        Schema::table('tagihans', function (Blueprint $table) {
            $table->foreign('id_siswa')->references('id')->on('siswas');
        });
        Schema::create('tagihan_details', function (Blueprint $table) {
            $table->string('id');
            $table->uuid('id_user');
            $table->timestamps();
        });
        Schema::table('tagihan_details', function (Blueprint $table) {
            $table->foreign('id')->references('id')->on('tagihans');
            $table->foreign('id_user')->references('id')->on('users');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tagihan_details', function (Blueprint $table) {
            $table->dropForeign('tagihan_details_id_foreign');
            $table->dropForeign('tagihan_details_id_user_foreign');
        });
        Schema::table('tagihans', function (Blueprint $table) {
            $table->dropForeign('tagihans_id_siswa_foreign');
        });
        Schema::dropIfExists('tagihan_details');
        Schema::dropIfExists('tagihans');
    }
};
