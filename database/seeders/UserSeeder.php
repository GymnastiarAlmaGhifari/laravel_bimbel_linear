<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([

            'name' => "admin",
            'email' => "admin@example.com",
            'no_hp' => "081234567890",
            'alamat' => "Jl. Admin",
            'img' => "admin.png",
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt('password'), // password
            'remember_token' => Str::random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $super = User::create([
            'name' => "super admin",
            'email' => "super@example.com",
            'no_hp' => "081234567890",
            'alamat' => "Jl. Super Admin",
            'img' => "super.png",
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt('password'), // password
            'remember_token' => Str::random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $tentor =  User::create([
            'name' => "tentor",
            'email' => "tentor@example.com",
            'no_hp' => "081234567890",
            'alamat' => "Jl. Tentor",
            'img' => "tentor.png",
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt('password'), // password
            'remember_token' => Str::random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $wkwk =  User::create([
            'name' => "wkwk",
            'email' => "wkwkland@mail.com",
            'no_hp' => "081234567890",
            'alamat' => "Jl. Tentor",
            'img' => "tentor.png",
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt('password'), // password
            'remember_token' => Str::random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $admin->assignRole('admin');
        $super->assignRole('super');
        $tentor->assignRole('tentor');
        $wkwk->assignRole('tentor');
    }
};
