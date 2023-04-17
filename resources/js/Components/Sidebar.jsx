import React, { useState, useEffect } from "react";
import { usePermission } from "@/composable/permission";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

const Sidebar = () => {
    const { hasRole, hasPermission } = usePermission();

    // state untuk menyimpan status sidebar (dibuka atau ditutup)
    const [isOpen, setIsOpen] = useState(
        localStorage.getItem("sidebarStatus") === "true" ? true : false
    );

    // fungsi untuk mengganti status sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        localStorage.setItem("sidebarStatus", isOpen);
    }, [isOpen]);

    return (
        <div className={`flex flex-col h-screen ${isOpen ? "w-64" : "w-16"}`}>
            <div className="flex items-center justify-center h-16">
                <Link href="/">
                    <ApplicationLogo
                        className={`block h-9 w-auto fill-current text-gray-800 ${
                            isOpen ? "mr-4" : ""
                        }`}
                    />
                </Link>
            </div>

            {/* urutkan menu berbentuk vertical */}
            <div className="flex-grow flex flex-col">
                <div className="flex-grow flex flex-col">
                    <NavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                        icon={<i className="fas fa-tachometer-alt"></i>}
                        isOpen={isOpen}
                    >
                        Dashboard
                    </NavLink>

                    {hasRole("super") && (
                        <>
                            <NavLink
                                href={route("super.index")}
                                active={route().current("super.index")}
                                icon={<i className="fas fa-user-shield"></i>}
                                isOpen={isOpen}
                            >
                                Super
                            </NavLink>
                            <NavLink
                                href={route("role.index")}
                                active={route().current("role.index")}
                                icon={<i className="fas fa-user-tag"></i>}
                                isOpen={isOpen}
                            >
                                Role
                            </NavLink>
                            <NavLink
                                href={route("jadwal.index")}
                                active={route().current("jadwal.index")}
                                icon={<i className="fas fa-calendar-alt"></i>}
                                isOpen={isOpen}
                            >
                                Jadwal
                            </NavLink>
                            <NavLink
                                href={route("users.index")}
                                active={route().current("users.index")}
                                icon={<i className="fas fa-users"></i>}
                                isOpen={isOpen}
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
                            icon={<i className="fas fa-truck"></i>}
                            isOpen={isOpen}
                        >
                            Delivery
                        </NavLink>
                    )}
                </div>
            </div>

            <button
                onClick={toggleSidebar}
                className={`${
                    isOpen ? "w-64" : "w-16"
                } h-16 absolute bottom-0 transition-all duration-300 focus:outline-none ${
                    isOpen ? "right-0" : ""
                } bg-white border border-black`}
                style={{ zIndex: "999" }}
            >
                <i
                    className={`fas ${
                        isOpen ? "fa-caret-left" : "fa-caret-right"
                    }`}
                ></i>
            </button>
        </div>
    );
};

export default Sidebar;
