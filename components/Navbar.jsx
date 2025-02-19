import React from "react";
import { useRouter } from "next/router";
import { MessageSquare, Settings, User, LogOut } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname; // Get current route

  const menuItems = [
    { path: "/chat/main", icon: <MessageSquare className="w-6 h-6" />, name: "chats" },
    { path: "/user/profile", icon: <User className="w-6 h-6" />, name: "profile" },
    { path: "/user/settings", icon: <Settings className="w-6 h-6" />, name: "settings" },
  ];

  const handleLogout = () => {
    alert("Logged out");
  };

  return (
    <div className="w-16 border-r border-gray-800 flex flex-col items-center py-4 bg-gray-900">
      <nav className="flex-1 flex flex-col items-center space-y-4">
        {menuItems.map(({ path, icon, name }) => (
          <button
            key={name}
            onClick={() => router.push(path)}
            className={`p-3 rounded-lg transition-all ${
              currentPath === path
                ? "bg-gray-800 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            {icon}
          </button>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-auto p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
      >
        <LogOut className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Navbar;
