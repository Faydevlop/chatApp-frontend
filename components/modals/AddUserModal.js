import axios from 'axios';
import { UserPlus } from 'lucide-react';
import React, { useState } from 'react';
import axiosInstance from '@/middleware/axiosInstance';

const AddUserModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');


  const handleSearch = async () => {
    if (searchQuery.length < 4) {
      setErrorMessage("Search query must be at least 4 characters."); // ❌ Set error
      setSearchResult(null); // Clear previous results
      return;
    }
  
    setErrorMessage(""); // ✅ Clear error when valid
  
    try {
      const response = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/searchUser`,
        { params: { searchQuery } }
      );
      setSearchResult(response.data);
    } catch (error) {
      console.error("Search error:", error);
      setErrorMessage("An error occurred while searching. Please try again."); // ❌ Display API error
    }
  };
  

  if (!isOpen) return null;

  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-900 text-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-4">Add User</h2>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

        <input
          type="text"
          placeholder="Enter email..."
          className="w-full bg-gray-800 text-white px-4 py-2 rounded mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 w-full py-2 rounded hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
        {searchResult && searchResult.length > 0 ? (
  <div className="mt-4">
    {searchResult.map((user) => (
      <div
        key={user._id}
        className="p-2 border border-gray-700 rounded flex items-center justify-between mb-2"
      >
        {/* Profile Photo & User Details */}
        <div className="flex items-center gap-3">
          <img
            src={user.avatar} // ✅ Avatar URL
            alt={user.username}
            className="w-10 h-10 rounded-full object-cover border border-gray-600"
          />
          <div>
            <p className="font-semibold">{user.username}</p>
            <p className="text-gray-400">{user.email}</p>
          </div>
        </div>

        {/* Add User Button */}
        <button className="text-blue-500 hover:text-blue-600">
          <UserPlus className="w-5 h-5 mr-4 hover:text-white" />
        </button>
      </div>
    ))}
  </div>
) : (
  searchResult !== null && <p className="text-gray-400 mt-4">No users found</p>
)}


        <button
          className="mt-4 w-full bg-red-500 py-2 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddUserModal;
