import React, { useState } from 'react';
import { Search, MoreVertical, Send, Phone, Video, UserCircle2, ArrowLeft, MessageSquare, Settings,User , LogOut } from 'lucide-react';
import Navbar from '@/components/Navbar';
import UserList from '@/components/UserList';
import MessageList from '@/components/MessageList';
import EmptyChat from '@/components/EmptyChat';
import ChatHeader from '@/components/ChatHeader';
import MessageInput from '@/components/MessageInput';



const page = () => {

  
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeNav, setActiveNav] = useState("chats");
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

  
  return (
    <div className="min-h-screen bg-black text-white flex">
    {/* Navigation Sidebar */}
   <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />

    {/* Left Section - Searchbar */}
    <div className={`w-full md:w-1/3 border-r border-gray-800 ${selectedUser ? 'hidden md:block' : 'block'}`}>
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold mb-4">NexusChat</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-gray-900 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>
    {/* Users Listing */}
     <UserList users={users} setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
    </div>

    {/* Right Section - Chat */}
    <div className={`flex-1 ${selectedUser ? 'block' : 'hidden md:block'}`}>
  {selectedUser ? (
    <div className="flex flex-col h-screen">
      <ChatHeader selectedUser={selectedUser} handleBackClick={() => setSelectedUser(null)} />
      <MessageList messages={messages} className="flex-1 overflow-y-auto" />
      <div className="w-full bg-gray-900 border-t border-gray-800">
        <MessageInput />
      </div>
    </div>
  ) : (
    <EmptyChat />
  )}
</div>
  </div>
  )
}

export default page
