import React from "react";
import { usePermission } from "@/composable/permission";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

const Sidebar = () => {
    const { hasRole, hasPermission } = usePermission();
    return (
        <div>
            <div className="flex">
                <div className="shrink-0 flex items-center">
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </Link>
                </div>

                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <NavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Dashboard
                    </NavLink>

                    {hasRole("super") && (
                        <>
                            <NavLink
                                href={route("super.index")}
                                active={route().current("super.index")}
                            >
                                Super
                            </NavLink>
                            <NavLink
                                href={route("role.index")}
                                active={route().current("role.index")}
                            >
                                Role
                            </NavLink>
                            <NavLink
                                href={route("users.index")}
                                active={route().current("users.index")}
                            >
                                Users
                            </NavLink>
                        </>
                    )}
                    {/* can:(manage selling) */}
                    {hasPermission("manage delivery") && (
                        <NavLink
                            href={route("delivery.index")}
                            active={route().current("delivery.index")}
                        >
                            delivery
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
