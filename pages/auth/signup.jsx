import React, { useState } from 'react';
import { MessageSquare, Mail, Lock, User } from 'lucide-react';

const signup = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState('');
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
    
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
    
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
          setIsLoading(false);
          alert('hello')
        }, 1000);
      };
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-gray-800 rounded-xl mb-4">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Create Account</h1>
            <p className="text-gray-400">Join NexusChat today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Username</label>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full bg-gray-800 text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-gray-800 text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full bg-gray-800 text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  className="w-full bg-gray-800 text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center animate-fade-in">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-400">
            Already have an account?{' '}
            <button 
              onClick={() => navigate('/login')}
              className="text-white hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default signup
