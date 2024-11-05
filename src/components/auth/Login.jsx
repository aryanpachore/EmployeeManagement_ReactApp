import React, { useState } from 'react';

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const submitHandler =(e)=>{
        e.preventDefault()
        console.log('Email is:',email)
        console.log('password is:',password)
        setEmail("")
        setPassword("")
    }



    return (
        <div className='flex h-screen w-screen items-center justify-center '>
            <div className='border-2 border-red-600 p-20'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className='flex flex-col items-center justify-center' action="">
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    type="email" placeholder='Enter your email' className="mb-4 p-2 text-white bg-transparent placeholder:text-grey-400 border rounded-full border-emerald-600" />
                    <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    type="password" placeholder='Enter your password' className="mb-4 p-2 text-white bg-transparent placeholder:text-grey-400 border rounded-full border-emerald-600" />
                    <button type="submit" className="bg-red-600 text-white p-2 rounded-full">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
