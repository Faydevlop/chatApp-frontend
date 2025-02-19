import React, { useState } from 'react';
import { MessageSquare, Mail, Key } from 'lucide-react';


const otp = () => {

    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        if (otp.length !== 6) {
            setError('OTP must be 6 digits');
            return;
        }
        
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert('OTP Verified');
        }, 1000);
    };
    
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
    <div className="w-full max-w-md">
        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl animate-fade-in">
            <div className="text-center mb-8">
                <div className="inline-block p-3 bg-gray-800 rounded-xl mb-4">
                    <MessageSquare className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-bold mb-2">Enter OTP</h1>
                <p className="text-gray-400">We've sent a code to your email</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">OTP</label>
                    <div className="relative">
                        <input
                            type="text"
                            name="otp"
                            required
                            className="w-full bg-gray-800 text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
                            placeholder="Enter 6-digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <Key className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
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
                        'Verify OTP'
                    )}
                </button>
            </form>
        </div>

        <div className="text-center mt-6">
            <p className="text-gray-400">
                Didn't receive the code?{' '}
                <button 
                    onClick={() => alert('Resend OTP')}
                    className="text-white hover:underline"
                >
                    Resend OTP
                </button>
            </p>
        </div>
    </div>
</div>
  )
}

export default otp
