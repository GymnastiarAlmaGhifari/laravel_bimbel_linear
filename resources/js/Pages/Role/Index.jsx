import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Fragment, useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import Create from "./Create";
import Edit from "./Edit";

const Index = ({ auth, errors, roles, permissions }) => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingRole, setEditingRole] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        if (showSuccessMessage) {
            const timeoutId = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, [showSuccessMessage]);

    const handleEditSuccess = () => {
        setShowSuccessMessage(true);
    };

    const handleShowCreateModal = () => {
        setShowCreateModal(true);
    };

    const handleShowEditModal = (role) => {
        setEditingRole(role);
        setShowEditModal(true);
    };

    //
    return (
        <AuthenticatedLayout auth={auth} errors={errors}>
            <Head title="Dashboard" />
            {/* buat table */}

            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Roles</h1>

                {/* create with modal from call Create from create.jsx */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={handleShowCreateModal}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Create Role
                    </button>
                </div>

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

                                {/* actions dengan edit delet dengan modal */}
                                <td className="py-3 px-2 text-left">
                                    <Link
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleShowEditModal(role);
                                        }}
                                        // href={`role/${role.id}/edit`}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Edit
                                    </Link>

                                    <Link
                                        href={`role/${role.id}/delete`}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Modal
                    show={showCreateModal}
                    onClose={() => setShowCreateModal(false)}
                >
                    <Create
                        permissions={permissions}
                        onClose={() => setShowCreateModal(false)}
                    />
                </Modal>
                <Modal
                    show={showEditModal}
                    onClose={() => setShowEditModal(false)}
                >
                    <Edit
                        role={editingRole}
                        permissions={permissions}
                        onClose={() => setShowEditModal(false)}
                        onEditSuccess={handleEditSuccess}
                    />
                </Modal>
                {showSuccessMessage && (
                    <div className="success-message">
                        Role has been updated successfully!
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
