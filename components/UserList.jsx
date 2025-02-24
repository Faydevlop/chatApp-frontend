import axiosInstance from '@/middleware/axiosInstance'
import React, { useEffect, useState } from 'react'



const UserList = ({setSelectedUser, selectedUser}) => {
  const [users,setUsers] = useState([])


  const getFriendslists = async()=>{
    try {
      const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/users/listFriends`)
      setUsers(response.data.users)
      console.log(response.data.users);
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getFriendslists()
  },[])


    

      
  return (
    <div className="overflow-y-auto h-[calc(100vh-7.5rem)]">
        {users.map(user => (
          <div
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`p-4 flex items-center space-x-4 hover:bg-gradient-to-r from-slate-900 via-blue-950 cursor-pointer transition-all duration-200 ${
              selectedUser?.id === user.id ? 'bg-gradient-to-r  from-slate-900 via-blue-850' : ''
            }`}
          >
            <img
              src={user.avatar}
              alt={user.username}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold truncate">{user.username}</h3>
              <p className="text-gray-400 text-sm truncate">{user.lastMessage}</p>
            </div>
            <span className="text-gray-400 text-xs whitespace-nowrap">{user.time}</span>
          </div>
        ))}
      </div>
  )
}

export default UserList
