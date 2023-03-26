import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, errors, users }) => {
    return (
        <AuthenticatedLayout auth={auth} errors={errors}>
            <Head title="Dashboard" />
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Users</h1>
                <Link
                    href="users/create"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Create User
                </Link>
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm font-bold uppercase">
                            <th className="w-1/12 py-3 px-2 text-left">#</th>
                            <th className="w-3/12 py-3 px-2 text-left">Name</th>
                            <th className="w-4/12 py-3 px-2 text-left">
                                Email
                            </th>
                            <th className="w-2/12 py-3 px-2 text-left">
                                Roles
                            </th>
                            <th className="w-1/12 py-3 px-2 text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className="border-b border-gray-200 hover:bg-gray-100"
                            >
                                <td className="py-3 px-2 text-left">
                                    {user.id}
                                </td>
                                <td className="py-3 px-2 text-left">
                                    {user.name}
                                </td>
                                <td className="py-3 px-2 text-left">
                                    {user.email}
                                </td>
                                <td className="py-3 px-2 text-left">
                                    {user.roles.map((role) => (
                                        <span key={role.id}>{role.name}</span>
                                    ))}
                                </td>
                                <td className="py-3 px-2 text-left">
                                    <a
                                        href={`users/${user.id}/edit`}
                                        className="text-indigo-600 hover:text-indigo-900 mr-2"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        href={`users/${user.id}`}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Delete
                                    </a>
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
