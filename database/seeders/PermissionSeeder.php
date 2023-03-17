<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\RoleHasPermission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        Permission::create([
            'name' => 'manage selling',
            'guard_name' => 'web'
        ]);

        Permission::create([
            'name' => 'manage purchasing',
            'guard_name' => 'web'
        ]);
        Permission::create([
            'name' => 'manage invoice',
            'guard_name' => 'web'
        ]);
        Permission::create([
            'name' => 'manage delivery',
            'guard_name' => 'web'
        ]);
        Permission::create([
            'name' => 'super admin',
            'guard_name' => 'web'
        ]);
    }
}
