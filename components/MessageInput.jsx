import { Send } from "lucide-react";

const MessageInput = () => {
  return (
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
  );
};

export default MessageInput;
