import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";

const Edit = ({ role, permissions, onClose, show, roleid }) => {
    // return modal
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <Head title="Edit Role" />
            <h1 className="text-2xl font-bold mb-4">Edit Role</h1>
            <h1 className="text-2xl font-bold mb-4">{role.id}</h1>
            <h1 className="text-2xl font-bold mb-4">{role.name}</h1>
        </div>
    );
};
export default Edit;
