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
        Schema::create('siswas', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nama');
            $table->string('kelas');
            $table->string('sekolah');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('no_hp');
            $table->string('hp_ortu');
            $table->string('alamat');
            $table->string('img');
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
        Schema::dropIfExists('siswas');
        //drop foreign key
        
    }
};
