import React, { useState } from 'react'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='bg-blue-600 p-7'>
        <div className="max-w-[1240] py-[1px] items-center flex justify-between mx-auto">
            <div className='text-2xl font-bold'>
                Eshel'sAcadmySystem
            </div>
            {
                toggle?
                 <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden'/> 
                 :
                 <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden'/>

            }
            
           

            <ul className='hidden md:flex text-white gap-7 mx-24'>
                <li>Home</li>
                <li>Contact</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>

            </ul>
            {/* responsive menu */}
            <ul className={`duration-500 w-full h-screen md:hidden text-white gap-10 fixed bg-black top-[65px]
             ${toggle? 'left-0' : 'left-[-100%]'} 
             `}>
                <li className='p-5'>Home</li>
                <li className='p-5'>Contact</li>
                <li className='p-5'>Company</li>
                <li className='p-5'>Resources</li>
                <li className='p-5'>About</li>

            </ul>
        </div>

    
    </div>
  )
}

export default Header
