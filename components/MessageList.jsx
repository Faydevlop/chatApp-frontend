import axiosInstance from "@/middleware/axiosInstance";
import {  useEffect, useState } from "react";
import useSocket from "@/hooks/useSocket";
import { useSelector } from "react-redux";

const MessageList = ({ selectedUser }) => {
  const [messages,setMessages] = useState([])
  const socket = useSocket()

  const { user} = useSelector((state) => state.auth);

  

  
  const getChatHistory = async()=>{
    if (!selectedUser) return;  
    try {
      const response = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/chat/listchat?friendId=${selectedUser._id}`)
      setMessages(response.data.messages)
      console.log(response);
      
      
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }

  useEffect(()=>{
    getChatHistory()
  },[selectedUser])


  // listen for new messages
  useEffect(()=>{
    if(!socket) return ;

    socket.on("receiveMessage",(message)=>{
      setMessages((prev)=>[...prev,message])
    });

    return ()=>{
      socket.off("receiveMessage");
    }


  },[socket])

    return (
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#111]">
        {messages.length === 0 ? (
        <p className="text-center text-gray-400">No messages yet.</p> // ✅ Show message instead of crashing
      ):(messages.map((message) => (
        <div key={message._id} className={`flex ${message.sender === user._id ? "justify-end" : "justify-start"}`}>
          <div
            className={`max-w-[85%] sm:max-w-[70%] p-3 rounded-lg ${
              message.sender === user._id ? "text-slate-300 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors border border-slate-600" : "text-slate-300 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors border border-slate-600"
            } animate-fade-in`}
          >
            <p className="break-words">{message.message}</p>
            {new Date(message.createdAt).toLocaleTimeString()}
          </div>
        </div>
      )))}
      </div>
    );
  };
  
  export default MessageList;
  