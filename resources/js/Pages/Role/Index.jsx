import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, errors, roles }) => {
    return (
        <AuthenticatedLayout auth={auth} errors={errors}>
            <Head title="Dashboard" />
            {/* buat table */}
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Roles</h1>
                <Link
                    href="role/create"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Create Role
                </Link>
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm font-bold uppercase">
                            <th className="w-1/12 py-3 px-2 text-left">#</th>
                            <th className="w-4/12 py-3 px-2 text-left">
                                Roles
                            </th>
                            <th className="w-2/12 py-3 px-2 text-left">
                                Permissions
                            </th>
                            <th className="w-2/12 py-3 px-2 text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role) => (
                            <tr
                                key={role.id}
                                className="border-b border-gray-200 hover:bg-gray-100"
                            >
                                <td className="py-3 px-2 text-left">
                                    {/* make autoincrement */}
                                    {roles.indexOf(role) + 1}
                                </td>
                                <td className="py-3 px-2 text-left">
                                    {role.name}
                                </td>
                                <td className="py-3 px-2 text-left whitespace-pre-wrap">
                                    {role.permissions.map((permission) => (
                                        <span key={permission.id}>
                                            {permission.name}
                                            {", "}
                                        </span>
                                    ))}
                                </td>

                                {/* actions */}
                                <td className="py-3 px-2 text-left">
                                    <Link
                                        href={`roles/${role.id}/edit`}
                                        className="text-indigo-600 hover:text-indigo-900 mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={`roles/${role.id}/delete`}
                                        className="text-red-600 hover:text-red-900 mr-2"
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
};
export default Index;
