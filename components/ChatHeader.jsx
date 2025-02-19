import { ArrowLeft, Phone, Video, MoreVertical } from "lucide-react";

const ChatHeader = ({ selectedUser, handleBackClick }) => {
  return (
    <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-gray-900">
      <div className="flex items-center space-x-4">
        <button onClick={handleBackClick} className="md:hidden text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src={selectedUser.avatar} alt={selectedUser.name} className="w-10 h-10 rounded-lg" />
        <h2 className="font-semibold truncate">{selectedUser.name}</h2>
      </div>
      <div className="flex items-center space-x-4">
        <Phone className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all hidden sm:block" />
        <Video className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all hidden sm:block" />
        <MoreVertical className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all" />
      </div>
    </div>
  );
};

export default ChatHeader;
