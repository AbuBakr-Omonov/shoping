import axios from 'axios';
import { BadgeCheck, CalendarDays, Fingerprint, Mail, ShieldCheck, UserCircle, UserCog } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();



  useEffect(() => {
    (async () => {

      let { data } = await axios.get("https://nt-shopping-list.onrender.com/api/auth", {
        headers: {
          "x-auth-token": `${localStorage.getItem("token")}`,
        }
      })
      setUser(data)
      console.log(data);

      // .then((res) => {
      //   setUser(res.data)
      // })

      // .catch((error) => {
      //   console.error(error);
      // });
    })()

  }, [])


  const onDelete = async () => {

    let res = await axios.delete("https://nt-shopping-list.onrender.com/api/users", {
      headers: {
        "x-auth-token": `${localStorage.getItem("token")}`
      }

    })
    if (res.status === 200) {
      localStorage.removeItem("token")
        navigate("/register");
    }
    console.log(res);

  }

  return (
    <div className="max-w-4xl mx-auto mt-16 bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between p-6 bg-gray-50 border-b">
        <div className="flex items-center space-x-4">
          <UserCircle className="w-20 h-20 text-blue-600 bg-white rounded-full border border-blue-200 p-1" />
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{user?.name}</h1>
            <p className="text-sm text-gray-500">@{user?.username}</p>
          </div>
        </div>
        <button onClick={onDelete} className="mt-4 sm:mt-0 px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 cursor-pointer transition">
          delate
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 text-sm text-gray-700">
        <div className="space-y-1">
          <div className="text-gray-500">User ID</div>
          <div className="flex items-center space-x-2 font-medium">
            <Fingerprint className="w-4 h-4 text-gray-400" />
            <span>{user?.id}</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-gray-500">Email / Username</div>
          <div className="flex items-center space-x-2 font-medium">
            <Mail className="w-4 h-4 text-purple-500" />
            <span>{user?.username}</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-gray-500">Role</div>
          <div className="flex items-center space-x-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span>{user?.role || 'User'}</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-gray-500">Join Date</div>
          <div className="flex items-center space-x-2 font-medium">
            <CalendarDays className="w-4 h-4 text-yellow-500" />
            <span>
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : 'Nomaʼlum'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile