import React from 'react'
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className='bg-blue-600 w-full py-[100px]'>
        <div className="max-w-[1240px] mx-auto text-center text-white font-bold mt-4 ">
          <h1 className='text-black text-xl md:text-3xl mt-4'>Learn With Us</h1>
          <h1 className='text-[30px] md:text-[60px] mt-4'>Grow With Us</h1>
          <h1 className='text-[15px] md:text-[40px] mt-3'>
            Learn <ReactTyped strings={["Here you can find anything"]} 
            typeSpeed={100} backSpeed={50} loop={true} />
            </h1>
            <button className='bg-black text-white p-3 mt-3 rounded'>Get Started</button>
           
        </div>
    </div>
  )
}

export default Banner
