import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

const Create = ({ auth, permissions }) => {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        permissions: [],
    });

    const handleCheckboxChange = (event) => {
        const permission = event.target.value;
        const isChecked = event.target.checked;
        setData((prevData) => ({
            ...prevData,
            permissions: isChecked
                ? [...prevData.permissions, permission]
                : prevData.permissions.filter((p) => p !== permission),
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        post(route("role.store"));
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Create new role" />
            <section className="py-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between">
                        <Link
                            href={route("role.index")}
                            className="px-3 py-2 text-white font-semibold bg-indigo-500 hover:bg-indigo-700 rounded"
                        >
                            Back
                        </Link>
                    </div>
                    <div className="mt-6 max-w-6xl mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
                        <h1 className="text-2xl font-semibold text-indigo-700">
                            Create new role
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-4">
                                <InputLabel htmlFor="name" value="Name" />
                                <input
                                    id="name"
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    value={data.name}
                                    onChange={(event) =>
                                        setData((prevData) => ({
                                            ...prevData,
                                            name: event.target.value,
                                        }))
                                    }
                                    autoFocus
                                    autoComplete="off"
                                />
                                {/* keluarkan error */}
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="permissions"
                                    value="Permissions"
                                />
                                <div className="flex flex-col space-y-2">
                                    {permissions?.map((permission) => (
                                        <label
                                            key={permission.id}
                                            htmlFor={`permission_${permission.id}`}
                                            className="flex items-center"
                                        >
                                            <input
                                                id={`permission_${permission.id}`}
                                                type="checkbox"
                                                className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                                                value={permission.name}
                                                checked={data.permissions.includes(
                                                    permission.name
                                                )}
                                                onChange={handleCheckboxChange}
                                            />
                                            <span className="ml-2 text-sm">
                                                {permission.name}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <PrimaryButton
                                    className="ml-4"
                                    type="submit"
                                    disabled={processing}
                                >
                                    Create
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default Create;
