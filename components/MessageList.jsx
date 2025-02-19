const MessageList = ({ messages }) => {
    return (
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#111]">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sent ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] sm:max-w-[70%] p-3 rounded-lg ${
                message.sent ? "bg-gray-800 rounded-tr-none" : "bg-gray-900 rounded-tl-none"
              } animate-fade-in`}
            >
              <p className="break-words">{message.text}</p>
              <span className="text-gray-400 text-xs">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MessageList;
  