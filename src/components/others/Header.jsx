import React from 'react';

const Header = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Background gradient with blur effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm -z-10" />
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute -top-40 -right-32 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            </div>

            {/* Main header container */}
            <div className="px-8 py-6 flex items-center justify-between bg-gray-900/50 border-b border-gray-800">
                {/* Greeting section */}
                <div className="relative group">
                    <div className="space-y-2">
                        <p className="text-gray-400 text-lg font-medium tracking-wide">
                            Welcome back
                        </p>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3">
                            Aryan
                            <span className="inline-block animate-wave origin-bottom-right text-white">👋</span>
                        </h1>
                        {/* Animated underline */}
                        <div className="h-1 w-1/2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transform origin-left transition-all duration-300 ease-out group-hover:w-full opacity-80" />
                    </div>
                </div>

                {/* Logout button */}
                <button 
                    className="relative px-6 py-3 group bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 hover:shadow-xl hover:shadow-purple-900/20"
                >
                    {/* Animated gradient border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-200" />
                    
                    {/* Button content */}
                    <span className="relative flex items-center gap-2 text-sm">
                        <svg 
                            className="w-5 h-5 transform transition-transform group-hover:-translate-y-px group-hover:translate-x-px" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                            />
                        </svg>
                        Log Out
                    </span>
                </button>
            </div>
        </div>
    );
};

// Add the necessary animations to your global CSS or style tag
const style = document.createElement('style');
style.textContent = `
    @keyframes wave {
        0% { transform: rotate(0deg); }
        20% { transform: rotate(-14deg); }
        40% { transform: rotate(14deg); }
        60% { transform: rotate(-4deg); }
        80% { transform: rotate(4deg); }
        100% { transform: rotate(0deg); }
    }
    .animate-wave {
        animation: wave 1.5s infinite;
    }
    @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
        animation: blob 7s infinite;
    }
    .animation-delay-2000 {
        animation-delay: 2s;
    }
`;
document.head.appendChild(style);

export default Header;