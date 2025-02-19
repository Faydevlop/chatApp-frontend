import React, { useState } from "react";
import { LogOut, Bell, EyeOff, CloudUpload, Moon, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";

const Settings = () => {
  // State for toggles
  const [darkMode, setDarkMode] = useState(false);
  const [readReceipts, setReadReceipts] = useState(true);
  const [theme, setTheme] = useState("default");

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Navigation Sidebar */}
      <Navbar />

      {/* Settings Content */}
      <div className="flex-1 p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        {/* Settings List */}
        <div className="w-full max-w-md space-y-4">
          {/* Dark Mode */}
          <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <span className="flex items-center gap-2">
              {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              Dark Mode
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition-all ${
                darkMode ? "bg-green-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-all ${
                  darkMode ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Read Receipts */}
          <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <span className="flex items-center gap-2">
              <EyeOff className="w-5 h-5" />
              Read Receipts
            </span>
            <button
              onClick={() => setReadReceipts(!readReceipts)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition-all ${
                readReceipts ? "bg-green-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-all ${
                  readReceipts ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Chat Backup */}
          <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <span className="flex items-center gap-2">
              <CloudUpload className="w-5 h-5" />
              Chat Backup
            </span>
            <button className="bg-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-500">
              Backup Now
            </button>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
            <span className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </span>
            <button className="bg-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-600">
              Manage
            </button>
          </div>

          {/* Theme Selection */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <label className="block mb-2">Theme</label>
            <select
              className="w-full bg-gray-900 p-2 rounded-lg"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>

          {/* Logout Button */}
          <button className="flex items-center justify-center w-full bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500 transition-all">
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
