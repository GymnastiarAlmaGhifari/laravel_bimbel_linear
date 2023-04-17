import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = ({ auth, errors }) => {
    return (
        <AuthenticatedLayout auth={auth} errors={errors}>
            <div>
                <h1>Index</h1>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
