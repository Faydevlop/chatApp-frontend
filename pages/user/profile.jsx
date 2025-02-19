import React from "react";
import { LogOut, UserCircle2, Edit } from "lucide-react";
import Navbar from "@/components/Navbar";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    status: "Living the dream!",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Navigation Sidebar */}
      <Navbar />

      {/* Profile Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Profile Picture */}
        <div className="relative">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-gray-700"
          />
        </div>

        {/* User Info */}
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-400">{user.email}</p>
          <p className="text-gray-300 mt-2">{user.status}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-4 w-full max-w-xs">
          <button className="flex items-center justify-center w-full bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-all">
            <Edit className="w-5 h-5 mr-2" />
            Edit Profile
          </button>

          <button className="flex items-center justify-center w-full bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500 transition-all">
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
