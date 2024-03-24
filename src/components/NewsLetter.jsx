import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-blue-600 p-7'>
        <div className="max-w-[1240px] md:flex justify-between py-[50px]">

            <div className='m-2'>
                <h1 className=' text-[20px] md:text-[30px] font-bold text-white mt-1'>
                   Do you want to learn latest I.T skills?
                    </h1>
                    <span className='text-white'>
                        sign up to our newsletter and stay up to date.
                    </span>
                </div>
            <div className='m-2'>
               <input type="text" className='w-[100%] sm:w-[60%] p-3 mr-2 text-slate-600 rounded mb-2 ' placeholder='Email' />
               <button className='bg-black text-white p-3 mt-3 rounded'>Get Started</button>
               <br />
               <p className='text-white mt-2'>
                We care about the protection of the your data.Read our
                <br />
                <a href="" className='text-black'>Privacy Policy</a>
               </p>

                </div>
        </div>
    </div>
  )
}

export default NewsLetter
