import React from 'react'
import { Link } from 'react-router-dom'
import video from '../assets/party.mp4'
import bg from '../assets/bg.webp'

export default function Imbibe() {
  return (
    <div style={{fontFamily:'jungle',backgroundImage:`url(${bg})`}} className='text-center text-white lg:flex lg:flex-row-reverse lg:justify-around lg:text-left w-screen tracking-widest lg:py-36 py-20 lg:items-center mb-14'>
      <h1 className='text-3xl lg:text-6xl lg:font-normal font-light pb-5 lg:pb-10 lg:hidden'>Imbibe</h1>
      <div className='px-10 lg:p-0 lg:w-6/12'>
      <video src={video} autoPlay loop muted className='object-cover w-full h-full border-white border-solid border' />
      </div>
      <div className='lg:py-10 p-8 lg:px-0 lg:w-4/12'>
        <h1 className='text-2xl lg:text-6xl lg:font-normal font-light pb-5 lg:pb-10 hidden lg:block'>Imbibe</h1>
        <p className='lg:text-xl'>Sip craft cocktails in your own personal cabana, or settle in at one of our intimate dining tables for a multi-course journey. With a nod toward Hemingway’s Havana, The Canal Club serves up Caribbean-inspired classics with a contemporary twist.</p>
        <Link to={'/dining'}><button type="button" class="py-5 px-10 mt-5 me-2 mb-2 text-base lg:text-xl font-medium focus:outline-none border rounded border-white-400 hover:bg-white hover:text-lime-900 duration-500" >Dine with Us</button></Link>
      </div>
    </div>
  )
}
