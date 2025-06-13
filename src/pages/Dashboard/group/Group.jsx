import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Group = () => {
const {groupId} = useParams()
const [group, setGroup] = useState(null)
useEffect(() => {
  axios.get(`https://nt-shopping-list.onrender.com/api/groups`, {
    headers: {
      "x-auth-token": localStorage.getItem("token")
    }
  }).then(res => {
    setGroup(res.data.filter(group => group?._id === groupId)[0])
  })
}, [])
  return (
      <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Group Details</h2>
      <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
        <tbody>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 font-medium border">ID</td>
            <td className="px-4 py-2 border">{group?._id}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-medium border">Name</td>
            <td className="px-4 py-2 border">{group?.name}</td>
          </tr>
          {group?.description && (
            <tr>
              <td className="px-4 py-2 font-medium border">Description</td>
              <td className="px-4 py-2 border">{group?.description}</td>
            </tr>
          )}
          {group?.createdAt && (
            <tr>
              <td className="px-4 py-2 font-medium border">Created At</td>
              <td className="px-4 py-2 border">{new Date(group?.createdAt).toLocaleString()}</td>
            </tr>
          )}
          {group?.members && Array.isArray(group?.members) && (
            <tr>
              <td className="px-4 py-2 font-medium border">Members</td>
              <td className="px-4 py-2 border">{group?.members.length} ta</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Group