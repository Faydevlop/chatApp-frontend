import React from "react";
import { useRouter } from "next/router";
import { logout } from '@/redux/slices/authSlice';
import { MessageSquare, Settings, User, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const currentPath = router.pathname; // Get current route

  const menuItems = [
    { path: "/user/chat", icon: <MessageSquare className="w-6 h-6" />, name: "chats",title:'chats' },
    { path: "/user/profile", icon: <User className="w-6 h-6" />, name: "profile",title:'profile' },
    { path: "/user/settings", icon: <Settings className="w-6 h-6" />, name: "settings",title:'settings' },
  ];

  const handleLogout = () => {
    dispatch(logout())
  };

  return (
    <div className="w-16 border-r border-gray-800 flex flex-col items-center py-4 bg-gradient-to-b from-slate-900 via-blue-950">
      <nav className="flex-1 flex flex-col items-center space-y-4">
        {menuItems.map(({ path, icon, name,title }) => (
          <button 
            key={name}
            onClick={() => router.push(path)}
             title={title}
            className={`p-3 rounded-lg transition-all ${
              currentPath === path
                ? "text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-blue-500/20"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            {icon}
          </button>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        title="Logout"
        className="mt-auto p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
      >
        <LogOut className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Navbar;
