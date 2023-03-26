<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\RoleResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\PermissionResource;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\Rules;
use App\Models\User;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(): Response
    {
        $users = User::with('roles')->get();
        return Inertia::render('Users/Index', [
            'users' => UserResource::collection($users),
            'roles' => RoleResource::collection(Role::all()),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Users/Create', [
            'roles' => RoleResource::collection(Role::all())
        ]);
    }
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $user->syncRoles($request->roles);
        return to_route('users.index');
    }
}
