import React from 'react'

const Tasklistnumber =()=>{
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className=' w-[45%] p-10 rounded-xl py-6 px-9 text-white bg-red-400'>
                <h2 className='text-2xl font-semibold'>1</h2>
                <h3 className='text-xl font-medium'>New Task </h3>
            </div>
            <div className=' w-[45%] p-10 rounded-xl py-6 px-9 text-white bg-blue-400'>
                <h2 className='text-2xl font-semibold'>3</h2>
                <h3 className='text-xl font-medium'>Completed Task </h3>
            </div>
            <div className=' w-[45%] p-10 rounded-xl py-6 px-9 text-white bg-emerald-400'>
                <h2 className='text-2xl font-semibold'>4</h2>
                <h3 className='text-xl font-medium'>Accepted Task </h3>
            </div>
            <div className=' w-[45%] p-10 rounded-xl py-6 px-9 text-white bg-yellow-400'>
                <h2 className='text-2xl font-semibold'>2</h2>
                <h3 className='text-xl font-medium'>Failed Task </h3>
            </div>
        </div>
    )
}

export default Tasklistnumber;