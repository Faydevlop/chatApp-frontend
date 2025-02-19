import React, { useState } from 'react'



const UserList = ({users,setSelectedUser, selectedUser}) => {


    

      
  return (
    <div className="overflow-y-auto h-[calc(100vh-7.5rem)]">
        {users.map(user => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className={`p-4 flex items-center space-x-4 hover:bg-gray-900 cursor-pointer transition-all duration-200 ${
              selectedUser?.id === user.id ? 'bg-gray-900' : ''
            }`}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold truncate">{user.name}</h3>
              <p className="text-gray-400 text-sm truncate">{user.lastMessage}</p>
            </div>
            <span className="text-gray-400 text-xs whitespace-nowrap">{user.time}</span>
          </div>
        ))}
      </div>
  )
}

export default UserList
