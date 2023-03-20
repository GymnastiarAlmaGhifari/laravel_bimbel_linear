import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, errors, permissions }) => {
    return (
        <AuthenticatedLayout auth={auth} errors={errors}>
            <Head title="Dashboard" />
            <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 ">
                <h1>test</h1>
                <Link href={route("role.create")}>Create</Link>
                <ul>
                    {permissions.map((permission) => (
                        <li key={permission.id}>{permission.name}</li>
                    ))}
                </ul>
            </section>
        </AuthenticatedLayout>
    );
};
export default Index;
