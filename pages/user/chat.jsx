import React, { useState } from 'react';
import { Search, MoreVertical, Send, Phone, Video, UserCircle2, ArrowLeft, MessageSquare, Settings,User , LogOut, UserPlus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import UserList from '@/components/UserList';
import MessageList from '@/components/MessageList';
import EmptyChat from '@/components/EmptyChat';
import ChatHeader from '@/components/ChatHeader';
import MessageInput from '@/components/MessageInput';
import { useSelector } from 'react-redux';

import withAuth from '@/components/hoc/withAuth'
import AddUserModal from '@/components/modals/AddUserModal';



const page = () => {

  
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [activeNav, setActiveNav] = useState("chats");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedmessages, setUpdatedmessages] = useState([]);



  


  const handleSearchClick = ()=>{

  }
  

  
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
    className="w-full bg-gray-900 text-white px-4 py-2 pl-10 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
  <button 
  onClick={() => setIsModalOpen(true)}
 
  className="absolute right-3 top-2.5 text-gray-400 hover:text-white transition-colors"
>
  <UserPlus className="w-5 h-5" />
</button>
<AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


</div>

      </div>
    {/* Users Listing */}
     <UserList  setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
    </div>

    {/* Right Section - Chat */}
    <div className={`flex-1 ${selectedUser ? 'block' : 'hidden md:block'}`}>
  {selectedUser ? (
    <div className="flex flex-col h-screen">
      <ChatHeader selectedUser={selectedUser}  handleBackClick={() => setSelectedUser(null)} />
      <MessageList   selectedUser={selectedUser}  className="flex-1 overflow-y-auto" />
      <div className="w-full bg-gray-900 border-t border-gray-800">
        <MessageInput selectedUser={selectedUser}  />
      </div>
    </div>
  ) : (
    <EmptyChat />
  )}
</div>

  </div>
  )
}

export default withAuth(page)
