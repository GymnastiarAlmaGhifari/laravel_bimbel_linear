import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { useState } from "react";

const Edit = ({ role, permissions, onClose, show, roleid }) => {
    const { data, setData, errors, put, processing } = useForm({
        name: role.name,
        permissions: role.permissions.map((permission) => permission.id), // use the IDs instead of the whole objects
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("role.update", role.id));
        onClose();
    };

    const handlePermissionChange = (e) => {
        const permissionId = parseInt(e.target.value); // convert to integer since IDs are numbers
        const isChecked = e.target.checked;
        const permissions = [...data.permissions];
        if (isChecked) {
            permissions.push(permissionId);
        } else {
            const index = permissions.indexOf(permissionId);
            permissions.splice(index, 1);
        }
        setData("permissions", permissions);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <Head title="Edit Role" />
            <h1 className="text-2xl font-bold mb-4">Edit Role</h1>
            <form onSubmit={handleSubmit}>
                <InputLabel htmlFor="name" label="Name" />
                <input
                    id="name"
                    className={`input-text ${
                        errors.name ? "input-invalid" : ""
                    }`}
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                    autoFocus
                />
                {errors.name && <InputError>{errors.name}</InputError>}

                <InputLabel htmlFor="permissions" label="Permissions" />
                {permissions.map((permission) => (
                    <InputLabel
                        key={`permission-${permission.id}`}
                        htmlFor={`permission-${permission.id}`}
                        label={permission.name}
                    >
                        <input
                            type="checkbox"
                            id={`permission-${permission.id}`}
                            name={`permissions[${permission.id}]`}
                            value={permission.id}
                            checked={data.permissions.includes(permission.id)}
                            onChange={handlePermissionChange}
                        />
                        <span>{permission.name}</span>
                    </InputLabel>
                ))}

                <div className="flex justify-end mt-6">
                    <Link
                        href="#"
                        onClick={onClose}
                        className="btn btn-secondary mr-2"
                    >
                        Cancel
                    </Link>
                    <PrimaryButton processing={processing}>Save</PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default Edit;
