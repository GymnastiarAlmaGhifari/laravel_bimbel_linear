<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRoleRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:30', Rule::unique('roles', 'name')->ignore($this->role)],
            'permissions' => ['sometimes', 'array']
        ];
    }
}
