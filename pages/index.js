import React, { useState } from 'react'
import { Search, MoreVertical, Send, Phone, Video, UserCircle2, ArrowLeft } from 'lucide-react';

const index = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages] = useState([
    { id: 1, text: "Hey there!", sent: true, timestamp: "10:00 AM" },
    { id: 2, text: "Hello! How are you?", sent: false, timestamp: "10:01 AM" },
    { id: 3, text: "I'm doing great, thanks!", sent: true, timestamp: "10:02 AM" },
  ]);

  const users = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey there!",
      time: "10:00 AM",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "How's it going?",
      time: "09:45 AM",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Mike Johnson",
      lastMessage: "See you tomorrow!",
      time: "Yesterday",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
  ];

  const handleBackClick = () => {
    setSelectedUser(null);
  };
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Section - Users List */}
      <div className={`w-full md:w-1/3 border-r border-gray-800 ${selectedUser ? 'hidden md:block' : 'block'}`}>
        <div className="p-4 border-b border-gray-800">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full bg-gray-900 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>
        
        <div className="overflow-y-auto h-[calc(100vh-5rem)]">
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
      </div>

      {/* Right Section - Chat */}
      <div className={`flex-1 ${selectedUser ? 'block' : 'hidden md:block'}`}>
        {selectedUser ? (
          <div className="flex flex-col h-screen">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-gray-900">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleBackClick}
                  className="md:hidden text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-10 h-10 rounded-lg"
                />
                <h2 className="font-semibold truncate">{selectedUser.name}</h2>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all hidden sm:block" />
                <Video className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all hidden sm:block" />
                <MoreVertical className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all" />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#111]">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[70%] p-3 rounded-lg ${
                      message.sent
                        ? 'bg-gray-800 rounded-tr-none'
                        : 'bg-gray-900 rounded-tl-none'
                    } animate-fade-in`}
                  >
                    <p className="break-words">{message.text}</p>
                    <span className="text-gray-400 text-xs">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-800 bg-gray-900">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
                />
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-[#111] h-screen">
            <div className="text-center px-4">
              <UserCircle2 className="w-20 h-20 mx-auto mb-4 text-gray-600" />
              <h2 className="text-xl font-semibold">Select a chat to start messaging</h2>
              <p className="text-gray-400">Choose from your existing conversations</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default index
