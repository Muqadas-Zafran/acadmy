import React from 'react'
import laptop from '../assets/img/laptop.jpg'

const Experts = () => {
  return (
    <div className='max-w-[1240px] p-2 mx-auto md:grid grid-cols-2 my-10 '>
      <div className="col-span-1 md:w-[80%]">
      <img src={laptop} alt="laptop" />
        
      </div>
      <div className="col-span-1 flex flex-col justify-center px-1">
        <h1 className='text-[#EA5C5B] font-bold mt-3 md:my-2 '>LEARN FROM EXPERTS</h1>
        <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Officiis iusto explicabo
            esse quasi sit quis laboriosam facilis,
             suscipit ipsam earum corrupti veniam vitae
              praesentium et adipisci
           laborum, voluptatum commodi neque.</p>
           <button className='w-[40%] md:w-[30%] bg-black text-white p-3 rounded'>Get Started</button>

      </div>
    </div>
  )
}

export default Experts
