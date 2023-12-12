import React from 'react'
import wedding from '../assets/wedding.mp4'
import event from '../assets/event.mp4'
export default function Event() {
  return (
    <div className='text-lime-900 text-center tracking-widest w-screen p-10 mt-5 mb-10'style={{fontFamily:'jungle'}}>
    <h1 className='text-2xl lg:text-6xl lg:font-normal font-light p-10'  id='event'>Events</h1>

    <div className='lg:flex w-full lg:w-full lg:justify-around' >

    <div className='lg:items-center lg:flex lg:flex-col lg:w-1/3' >
      <div  className='p-10'>
      <video src={event} autoPlay loop muted className='object-cover w-full h-full '/>
    </div>
    <div>
    <h1 className='text-2xl lg:text-4xl lg:font-normal font-light p-5'>Meetings & Events</h1>
    <p className='px-7 font-light lg:text-xl'>Getting ideas? Make them reality by hosting your next meeting or event at the D-JOS.</p>
    <p className='underline underline-offset-4 pt-4 tracking-wide cursor-pointer duration-300 hover:text-orange-600'>LEARN MORE</p>
    </div>
    </div>



    <div className='lg:items-center lg:flex lg:flex-col lg:w-1/3'>
      <div  className='p-10'>
      <video src={wedding} autoPlay loop muted className='object-cover w-full h-full '/>
    </div>
    <div>
    <h1 className='text-2xl lg:text-4xl lg:font-normal font-light p-5'>Weddings</h1>
    <p className='px-7 font-light lg:text-xl'>Unforgettable occasions, tailored just for you. Have the wedding you envisioned from the moment you said “Yes!”.</p>
    <p className='underline underline-offset-4 pt-4 tracking-wide cursor-pointer duration-300 hover:text-orange-600'>LEARN MORE</p>
    </div>
    </div>



   
    </div>
      </div>
  )
}
