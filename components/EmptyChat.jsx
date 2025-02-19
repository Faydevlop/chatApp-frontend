import { UserCircle2 } from "lucide-react";

const EmptyChat = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-[#111] h-screen">
      <div className="text-center px-4">
        <UserCircle2 className="w-20 h-20 mx-auto mb-4 text-gray-600" />
        <h2 className="text-xl font-semibold">Select a chat to start messaging</h2>
        <p className="text-gray-400">Choose from your existing conversations</p>
      </div>
    </div>
  );
};

export default EmptyChat;
