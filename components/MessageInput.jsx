import { Send } from "lucide-react";
import useSocket from "@/hooks/useSocket";
import { useState } from "react";
import { useSelector } from "react-redux";

const MessageInput = ({selectedUser,}) => {
  const [message,setMessage] = useState("")
  const socket = useSocket();
  const { user} = useSelector((state) => state.auth);


  const sendMessage = async(e)=>{
    e.preventDefault();
    if (!message.trim() || !selectedUser || !socket) return;

    const messageData= {
      receiver:selectedUser._id,
      sender:user._id,
      message,
      createdAt:new Date()
    };

    // emit message to server
    socket.emit("sendMessage",messageData)

    // Clear Input field
    setMessage("")

  }




  return (
    <form onSubmit={sendMessage} className="p-4 border-t border-gray-800 bg-gradient-to-br from-slate-900 via-blue-950">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 text-slate-300 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors border border-slate-600"
        />
        <button type="submit" className="p-2 text-white-800 hover:text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-blue-500/20">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
