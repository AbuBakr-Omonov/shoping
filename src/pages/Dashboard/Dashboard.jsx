import { LogOut } from 'lucide-react'
import React from 'react'
import "./style.css"
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { User, Users } from 'lucide-react';

const Dashboard = () => {
      const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        if (!localStorage.getItem("token")) {
            return navigate("/login");
        }
    };
    return (
        <div>
            <div className="flex min-h-screen bg-[#EDF1F5] text-gray-800">
                <aside className="w-64 bg-[#1F2B3A] text-white px-4 py-6 hidden md:block">
                    <div className="mb-6">
                        <span className="text-xl font-semibold">Shoping</span>
                    </div>
                    <nav className="space-y-3 text-sm">
                        <NavLink to="" end className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700">
                            <User className="w-4 h-4" /> Profile
                        </NavLink>
                        <NavLink to="/group" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700">
                            <Users className="w-4 h-4" /> Groups
                        </NavLink>
                    </nav>
                </aside>
                <div className="flex-1 flex flex-col">
                    <header className="bg-[#4a9dd8] text-white px-6 py-4 shadow-md flex justify-between items-center">
                        <h1 className="text-lg font-semibold hidden md:block">Reyting</h1>
                        <button onClick={logOut} className="flex items-center gap-1 hover:text-gray-200 transition">
                            <LogOut className="w-5 h-5" />
                            <span className="text-sm">Chiqish</span>
                        </button>
                    </header>
                    <main >
                        <Outlet />
                    </main>
                </div>


            </div>

        </div>
    )
}

export default Dashboard