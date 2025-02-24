'use client';

import { MessageSquareX } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-500/10 p-8 text-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur opacity-25 animate-pulse"></div>
            <div className="relative bg-slate-800 rounded-full p-4">
              <MessageSquareX className="w-12 h-12 text-blue-400" />
            </div>
          </div>
        </div>
        
        <h1 className="mt-6 text-3xl font-bold text-white">Page Not Found</h1>
        
        <p className="mt-4 text-slate-300">
          Oops! It seems like this conversation doesn't exist. The page you're
          looking for might have been moved or deleted.
        </p>
        
        <div className="mt-8 space-y-3">
          <Link
            href="/user/chat"
            className="block w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            Return to Chat
          </Link>
          
          <Link
            href="/support"
            className="block w-full px-4 py-3 text-sm font-medium text-slate-300 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors border border-slate-600"
          >
            Contact Support
          </Link>
        </div>
        
        <p className="mt-6 text-sm text-slate-400">
          Error 404 - Page Not Found
        </p>
      </div>
    </div>
  );
}