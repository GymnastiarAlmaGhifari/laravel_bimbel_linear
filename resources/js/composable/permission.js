import { usePage } from "@inertiajs/react";

export const usePermission = () => {
    const hasRole = (name) => usePage().props.auth.user.roles.includes(name);

    // ambil dari usePage().props.auth.user.permissions jika ada permission yang sama maka return true
    const hasPermission = (name) =>
        usePage().props.auth.user.permissions.includes(name);

    return { hasRole, hasPermission };
};
