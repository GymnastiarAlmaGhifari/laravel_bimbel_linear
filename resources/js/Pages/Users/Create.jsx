import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

const Create = ({ auth, roles }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        roles: [],
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("users.store"), {
            onSuccess: () => {
                setData("name", "");
                setData("email", "");
                setData("password", "");
                setData("password_confirmation", "");
                setData("roles", []);
            },
        });
    };

    const handleRoleChange = (e) => {
        let options = e.target.options;
        let values = [];

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                values.push(options[i].value);
            }
        }

        setData("roles", values);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Create new user" />
            <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <form onSubmit={submit}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel htmlFor="name" label="Name" />
                                <input
                                    id="name"
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={data.name}
                                    placeholder="name"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    autoComplete="name"
                                    required
                                />
                                <InputError error={errors.name} />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel htmlFor="email" label="Email" />
                                <input
                                    id="email"
                                    type="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={data.email}
                                    placeholder="email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    autoComplete="email"
                                    required
                                />
                                <InputError error={errors.email} />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel
                                    htmlFor="password"
                                    label="Password"
                                />
                                <input
                                    id="password"
                                    type="password"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={data.password}
                                    placeholder="password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    autoComplete="new-password"
                                    required
                                />
                                <InputError error={errors.password} />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    label="Password Confirmation"
                                />
                                <input
                                    id="password_confirmation"
                                    type="password"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={data.password_confirmation}
                                    placeholder="password confirmation"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    autoComplete="new-password"
                                    required
                                />
                                <InputError
                                    error={errors.password_confirmation}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel htmlFor="roles" label="Roles" />
                                <select
                                    id="roles"
                                    multiple
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={data.roles}
                                    onChange={handleRoleChange}
                                    required
                                >
                                    {roles.map((role) => (
                                        <option key={role.id} value={role.id}>
                                            {role.name}
                                        </option>
                                    ))}
                                </select>
                                <InputError error={errors.roles} />
                            </div>
                        </div>

                        <div className="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <PrimaryButton processing={processing}>
                                Create
                            </PrimaryButton>
                            <Link
                                href={route("users.index")}
                                className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
