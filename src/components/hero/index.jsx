import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-block p-2 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 mb-6">
                        <img
                            src="https://pbs.twimg.com/profile_images/1925170543675752448/OLq1PEHo_400x400.jpg"
                            alt="PopX"
                            className="w-20 h-20 rounded-xl object-cover mx-auto"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        Welcome to PopX
                    </h1>
                    <p className="text-gray-600 text-base leading-relaxed px-2">
                        Your gateway to discovering exceptional content and building meaningful connections in our professional community.
                    </p>
                </div>
                <div className="space-y-4">
                    <button 
                        onClick={() => navigate('/createaccount')}
                        className="w-full bg-violet-800 hover:bg-violet-900 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    >
                        Create Account
                    </button>
                    
                    <button 
                        onClick={() => navigate('/login')}
                        className="w-full text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                        style={{ 
                            backgroundColor: '#DF73FF',
                            background: 'linear-gradient(135deg, #DF73FF 0%, #E085FF 100%)'
                        }}
                    >
                        Already Registered? Sign In
                    </button>
                </div>
                <div className="text-center mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                        By continuing, you agree to our Terms of Service and Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    );
}