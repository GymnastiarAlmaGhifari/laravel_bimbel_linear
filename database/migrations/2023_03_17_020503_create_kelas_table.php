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
        Schema::create('kelas', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nama_kelas');
            $table->timestamps();
        });
        Schema::table('siswas', function (Blueprint $table) {
            $table->foreign('kelas')->references('id')->on('kelas');
        });
        Schema::create('mapels', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nama_mapel');
            $table->string('kelas');
            $table->timestamps();
        });
        Schema::table('mapels', function (Blueprint $table) {
            $table->foreign('kelas')->references('id')->on('kelas');
        });
        Schema::create('moduls', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nama_modul');
            $table->string('mapel');
            $table->string('url');
            $table->string('thumbnail');
            $table->timestamps();
        });
        Schema::table('moduls', function (Blueprint $table) {
            $table->foreign('mapel')->references('id')->on('mapels');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('siswas', function (Blueprint $table) {
            $table->dropForeign('siswas_kelas_foreign');
        });
        Schema::dropIfExists('moduls');
        Schema::dropIfExists('mapels');
        Schema::dropIfExists('kelas');
    }
};
