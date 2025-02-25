import React from 'react'
import { MessageSquare, Sparkles, Shield, Zap } from 'lucide-react';
import Link from 'next/link';


const index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
          <div className="absolute -bottom-8 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-6000"></div>
        </div>

        {/* Content with improved spacing */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <MessageSquare className="w-8 h-8 text-blue-400 transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                NexusChat
              </span>
            </div>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-20 animate-pulse"></div>
              <h1 className="relative text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                Experience the Future of
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Intelligent Conversations
                </span>
              </h1>
            </div>
            <p className="text-xl text-blue-100 mb-12 opacity-90 max-w-2xl mx-auto">
              Connect with our advanced AI for meaningful, intuitive, and engaging conversations that adapt to your needs.
            </p>
            <Link href='/auth/login' >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 overflow-hidden">
              <span className="relative z-10">Start Chat with NexusChat</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-indigo-600 to-blue-500 transition-transform duration-500"></div>
            </button>
            </Link>
            
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-32 px-4 lg:px-12">
            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <Sparkles className="relative w-12 h-12 text-blue-400 mb-4 transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Intelligence</h3>
              <p className="text-blue-100 opacity-80">Advanced natural language processing for human-like conversations</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <Shield className="relative w-12 h-12 text-blue-400 mb-4 transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure & Private</h3>
              <p className="text-blue-100 opacity-80">End-to-end encryption keeping your conversations safe</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <Zap className="relative w-12 h-12 text-blue-400 mb-4 transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-blue-100 opacity-80">Real-time responses with minimal latency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
