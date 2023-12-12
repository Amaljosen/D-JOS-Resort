import React from 'react'
export default function Relax() {

  return (
    <div style={{fontFamily:'jungle'}} className='tracking-widest text-lime-900 lg:py-28 py-12'id='spa'>
        <h1 className='text-center hidden lg:block text-6xl pb-4'>Resort Spa Bliss</h1>
      <div className='text-lime-900 p-10 flex flex-col lg:flex-row lg:justify-around items-center justify-center'>
         
         <h1 className='lg:hidden text-4xl pb-12'>Resort Spa Bliss</h1>
          <h1 className='text-2xl font-light pb-5 lg:text-5xl lg:w-2/6 '>Relax and revive with one of La Vidorra’s rejuvenating spa treatments.</h1>
        <div className='lg:w-2/6'>
            <p className='font-light lg:text-xl'>With six private sun-washed treatment rooms, La Vidorra is dedicated to your serenity and tranquility. As a guest of La Vidorra Spa at The Scott, please enjoy the complimentary use of the Resort pools, fitness center, bathrobes, slippers, and special blend of herbal teas.</p>
            <button type="button" class="py-5 px-10 mt-5 me-2 mb-2 text-base lg:text-xl font-medium  focus:outline-none border rounded border-gray-400 hover:bg-lime-900 hover:text-white duration-500" >Learn More</button>
        </div>
       </div>
    </div>
  )
}
