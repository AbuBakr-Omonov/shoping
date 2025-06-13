import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
   useEffect(()=> {
   
   }, [])
    const onSubmit = async (e) => {
        e.preventDefault();
        let newUser = {
            name: e.target[0].value,
            username: e.target[1].value,
            password: e.target[2].value,
        };
        let res = await axios.post(
            "https://nt-shopping-list.onrender.com/api/users",
            newUser
        );
        localStorage.setItem("token", res.data.token);
        console.log(res);
         if (localStorage.getItem("token")) {
            navigate("/");
        }
    };
    const onLogin = () => {
        navigate("/login");
    }
    return (
        <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="nomi"
                        className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                    />
                     <input
                        type="text"
                        placeholder="Foydalanuvchi nomi"
                        className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                    />  
                    <input
                        type="password"
                        placeholder="Parol"
                        className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                    />
                    
                    <button
                        type="submit"
                        className="bg-[#1a73e8] text-white py-3 rounded text-lg font-semibold hover:bg-[#0f5bc4] transition"
                    >
                        Tizimga kirish
                    </button>
                    <hr />
                    <button onClick={onLogin} type="button" className="bg-[#34a853] text-white py-2 rounded font-bold hover:bg-[#2c8c47] transition"   >
                        loginga qaytish
                    </button>
                </form>
            </div>
        </div>

    );
}

export default Register