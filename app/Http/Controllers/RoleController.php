<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateRoleRequest;
use App\Http\Resources\PermissionResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Role/Index', [
            'permissions' => PermissionResource::collection(Permission::all())
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Role/Create', [
            'permissions' => PermissionResource::collection(Permission::all())
        ]);
    }

    public function store(CreateRoleRequest $request)
    {
        $role = Role::create(['name' => $request->name]);
        if ($request->permissions) {
            $role->syncPermissions($request->permissions);
        }

        return redirect()->route('role.index');
    }
}
