<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateRoleRequest;
use App\Http\Requests\Role\UpdateRoleRequest;
use App\Http\Resources\PermissionResource;
use App\Http\Resources\RoleResource;
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
            'roles' => RoleResource::collection(Role::with('permissions')->get()),
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
    public function edit(Role $role): Response
    {
        $permissions = PermissionResource::collection(Permission::all());
        $role->load('permissions');

        return Inertia::render('Role/Edit', [
            'role' => new RoleResource($role),
            'permissions' => $permissions,
            //show role id
            'id' => $role->id,
            'name' => $role->name,
        ]);
    }

    public function update(UpdateRoleRequest $request, Role $role)
    {
        $role->update(['name' => $request->name]);
        $role->syncPermissions($request->permissions);

        return redirect()->back()->with('success', 'Role has been updated.');
    }
}
