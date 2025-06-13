import { ChevronLeft, LogOut } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import "./style.css"
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { User, Users } from 'lucide-react';
import GroupCreate from './group/groupCreate/GroupCreate';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
    const navigate = useNavigate();
    const [groups, setGroups] = useState([])

    const logOut = () => {
        localStorage.removeItem("token");
        if (!localStorage.getItem("token")) {
            return navigate("/login");
        }
    };
    useEffect(() => {
        axios.get("https://nt-shopping-list.onrender.com/api/groups", {
            headers: {
                "x-auth-token": localStorage.getItem("token")
            }
        }).then((res) => {
            console.log(res.data);
            setGroups(res.data)
        })
    }, [])


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
                        <Popover>
                            <PopoverTrigger className="w-full">
                                <Button className="w-full">Create</Button>
                            </PopoverTrigger>
                            <PopoverContent >
                                <div className='flex flex-col gap-5 mb-5'>
                                    <Input />
                                    <Input />
                                </div>
                                <div className='flex gap-5'>
                                    <Button  className={"w-[120px] bg-blue-500  hover:bg-white hover:border border-blue-600 hover:text-blue-600"}>create</Button>
                                    <Button  className={"w-[120px]  bg-blue-500 hover:bg-white hover:border border-blue-600 hover:text-blue-600"}>cancel</Button>
                                </div>
                            </PopoverContent>
                        </Popover>

                        {
                            groups.map((item) => (
                                <Link className='flex flex-col' key={item._id} to={`groups/${item._id}`}>{item.name}</Link>
                            ))
                        }
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