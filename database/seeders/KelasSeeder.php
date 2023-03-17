<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KelasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('kelas')->insert([
            'id' => 1,
            'nama_kelas' => 'Kelas 1 SD',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelas')->insert([
            'id' => 2,
            'nama_kelas' => 'Kelas 2 SD',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelas')->insert([
            'id' => 3,
            'nama_kelas' => 'Kelas 3 SD',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelas')->insert([
            'id' => 4,
            'nama_kelas' => 'Kelas 4 SD',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelas')->insert([
            'id' => 5,
            'nama_kelas' => 'Kelas 5 SD',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelas')->insert([
            'id' => 6,
            'nama_kelas' => 'Kelas 6 SD',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelas')->insert([
            'id' => 7,
            'nama_kelas' => 'Kelas 1 SMP',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelas')->insert([
            'id' => 8,
            'nama_kelas' => 'Kelas 2 SMP',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelas')->insert([
            'id' => 9,
            'nama_kelas' => 'Kelas 3 SMP',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelas')->insert([
            'id' => 10,
            'nama_kelas' => 'Kelas 1 SMA',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelas')->insert([
            'id' => 11,
            'nama_kelas' => 'Kelas 2 SMA',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('kelas')->insert([
            'id' => 12,
            'nama_kelas' => 'Kelas 3 SMA',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        // create for loop to insert into table mapels
         for ($i = 1; $i <= 6; $i++) {
            DB::table('mapels')->insert([
                'id' => 'PAI' . $i,
                'nama_mapel' => 'Pendidikan Agama dan Budi Pekerti ' . $i,
                'kelas' => $i,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
         for ($i = 1; $i <= 6; $i++) {
            DB::table('mapels')->insert([
                'id' => 'PKN' . $i,
                'nama_mapel' => 'Pendidikan Pancasila dan Kewarganegaraan ' . $i,
                'kelas' => $i,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
         for ($i = 1; $i <= 6; $i++) {
            DB::table('mapels')->insert([
                'id' => 'BII' . $i,
                'nama_mapel' => 'Bahasa Indonesia ' . $i,
                'kelas' => $i,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
         for ($i = 1; $i <= 6; $i++) {
            DB::table('mapels')->insert([
                'id' => 'MTK' . $i,
                'nama_mapel' => 'Matematika ' . $i,
                'kelas' => $i,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
         for ($i = 4; $i <= 3; $i++) {
            DB::table('mapels')->insert([
                'id' => 'IPA' . $i,
                'nama_mapel' => 'Ilmu Pengetahuan Alam ' . $i,
                'kelas' => $i,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
         for ($i = 4; $i <= 3; $i++) {
            DB::table('mapels')->insert([
                'id' => 'IPS' . $i,
                'nama_mapel' => 'Ilmu Pengetahuan Sosial ' . $i,
                'kelas' => $i,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
         for ($i = 1; $i <= 6; $i++) {
            DB::table('mapels')->insert([
                'id' => 'SBP' . $i,
                'nama_mapel' => 'Seni Budaya dan Prakarya ' . $i,
                'kelas' => $i,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
         for ($i = 1; $i <= 6; $i++) {
            DB::table('mapels')->insert([
                'id' => 'JOK' . $i,
                'nama_mapel' => 'Pendidikan Jasmani, Olahraga dan Kesehatan ' . $i,
                'kelas' => $i,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
        
        
    }
}
