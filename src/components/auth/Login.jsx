import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Email is:', email);
        console.log('Password is:', password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900">
            <div className="bg-gray-800 rounded-lg shadow-xl p-10 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-100 mb-6">Login</h2>
                <form 
                    onSubmit={submitHandler} 
                    className="flex flex-col gap-6"
                >
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter your password"
                        className="p-3 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 ease-in-out shadow-lg"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
