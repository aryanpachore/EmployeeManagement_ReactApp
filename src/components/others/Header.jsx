import Ract from 'react'

const Header=()=>{
    return(
        <div className='flex  items-end text-white justify-between'>
            <h1 className='text-2xl'>Hello,<br /> <span className='text-3xl'>Aryan 👋</span></h1>
            <button className='bg-red-600 rounded-md text-lg font-medium px-5 py-2'>Log Out</button>
        </div>
    )
}

export default Header;