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
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt('password'), // password
            'remember_token' => Str::random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $super = User::create([
            'name' => "super admin",
            'email' => "super@example.com",
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt('password'), // password
            'remember_token' => Str::random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $tentor =  User::create([
            'name' => "tentor",
            'email' => "tentor@example.com",
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt('password'), // password
            'remember_token' => Str::random(10),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        $admin->assignRole('admin');
        $super->assignRole('super');
        $tentor->assignRole('tentor');
    }
};
