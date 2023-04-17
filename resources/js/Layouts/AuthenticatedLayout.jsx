import React from "react";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";

export default function Authenticated({ auth, children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* buat sidebar  */}
            <div className="bg-green-400">
                <Sidebar />
            </div>
            <div className="flex flex-col w-full overflow-hidden">
                <Navbar auth={auth} />
                {/* buat main contetntnya penuhi layar dan ambil childern */}
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-blue-600">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
