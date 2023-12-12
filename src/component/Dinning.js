import React,{useEffect} from 'react'
import Nav from './Nav'
import Footer from './Footer'
import restaurant from '../assets/restaurant.mp4'
import poolSide from '../assets/poolSide.png'
import denizen from '../assets/denizen.png'
import Caribbean from '../assets/Caribbean.png'


export default function Dinning() {

  useEffect(function(){
    window.scroll(0,0)
  },[])

  return (
    <div className='text-lime-900 tracking-widest w-screen 'style={{fontFamily:'jungle'}}>
     <Nav/>

      {/* ********************************** Caribbean Dining ************************************* */}
      
      <div className='text-center p-10 mt-32'>
    
    <div className='lg:flex w-full lg:w-full lg:justify-around'>

    <div className='lg:items-center lg:flex pb-16 lg:w-full lg:justify-around'>
      <div className='lg:w-1/3'>
      <img src={Caribbean} alt="img" className='object-cover w-full h-full '/>
    </div>


   


    <div className='text-left lg:w-1/3'>
    <h1 className='text-xl lg:text-2xl lg:font-normal font-light pt-7'>Dining</h1>
    <h1 className='text-2xl lg:text-5xl lg:font-normal font-light pt-3 lg:py-5'>Caribbean Redux</h1>
    <p className='font-light lg:text-xl py-5'>Under the direction of our Chef De Cuisine, The Canal Club provides an intimate and unforgettable dining experience that melds American classics with Caribbean-inspired flavors. Featuring a studious wine list and cinema-inspired craft cocktails to complement your meal.</p>
    <span className='pt-2 tracking-wide,'>For Large Party Inquiries, </span>
    <span className='underline underline-offset-4 tracking-wide cursor-pointer duration-300 hover:text-orange-600'>Click Here</span>
    <button type="button" class="py-5 px-10 mt-10 me-2 mb-2 text-base lg:text-xl font-medium  focus:outline-none border rounded border-gray-400 hover:bg-lime-900 hover:text-white duration-500">Reserve a Table</button>
    </div>
    </div>


    </div>
    </div>


{/* ******************************************* The Canal Club Timing ****************************************************** */}

    <div className='text-center p-10'>
    
    <div className='lg:flex w-full lg:w-full lg:justify-around'>

    <div className='lg:items-center lg:flex pb-16 lg:w-full lg:flex-row-reverse lg:justify-around'>
      <div className='lg:w-1/3'>
      <video src={restaurant} autoPlay loop muted className='object-cover w-full h-full '/>
    </div>
    <div className='text-left lg:w-1/3  lg:overflow-scroll lg:scrollbar-hide lg:h-2/3'>
    <h1 className='text-2xl lg:text-5xl lg:font-normal font-light pt-3 lg:py-5'>The Canal Club</h1>
    <p className='font-light lg:text-xl py-5'>Whether you’re staying with us at The Scott Resort & Spa or dropping by after a day in Old Town, The Canal Club is the perfect Scottsdale escape — a memorable dining experience blending old world and new.</p>
    <h1 className='text-2xl lg:text-4xl lg:font-normal font-light pt-3 lg:py-5'>Restaurant hours</h1>
    <p className='font-light lg:text-xl pb-10'>*Reservations recommended</p>
    <div>
            <h1 className='text-xl pb-3 lg:text-2xl '>Monday – Friday:</h1>
            <p className='font-extralight text-sm lg:text-xl font-sans'>Breakfast 7:00am – 11:00am</p>
            <p className='font-extralight text-sm lg:text-xl font-sans'>Lunch 11:00am – 3:00pm</p>
            <p className='font-extralight text-sm lg:text-xl font-sans'>Dinner 3:00pm – 10:00pm</p>
    </div>
    
    <div className='mt-5'>
            <h1 className='text-xl pb-3 lg:text-2xl '>Saturday & Sunday</h1>
            <p className='font-extralight text-sm lg:text-xl font-sans'>Brunch 7:00am – 3:00pm</p>
            <p className='font-extralight text-sm lg:text-xl font-sans'>Dinner 3:00pm – 10:00pm</p>
    </div>
    
    <div className='mt-5'>
            <h1 className='text-xl pb-3 lg:text-2xl '>Bar hours</h1>
            <p className='font-extralight text-sm lg:text-xl font-sans'>Sunday – Wednesday 7:00am – 10:00pm</p>
            <p className='font-extralight text-sm lg:text-xl font-sans'>Thursday – Saturday 7:00am – 11:00pm</p>
            <p className='font-extralight text-sm lg:text-xl font-sans'>Tapas Menu 3:00pm – 10:00pm</p>
    </div>
    
    </div>
    </div>


    </div>
    </div>

{/* ******************************************* Pool View Canal Club ****************************************************** */}

    <div className='text-center p-10'>
    <h1 className='text-2xl lg:text-4xl lg:font-normal font-light'>Pool View Canal Club</h1>
    <p className='px-7 font-light lg:text-xl mb-20 py-4'>The Denizen Club and The Canal Club Poolside</p>
   
    <div className='lg:flex w-full lg:w-full lg:justify-around'>
    <div className='lg:items-center lg:flex lg:flex-col lg:w-1/3 pb-16'>
      <div >
      <img src={denizen} alt="img" className='object-cover w-full h-full '/>
    </div>
    <div>
    <h1 className='text-2xl lg:text-4xl lg:font-normal font-light p-5'>The Denizen Club</h1>
    <p className='px-7 font-light lg:text-xl'>den·i·zen :: /ˈdenəzən/ an inhabitant or frequenter of a particular place</p>
    <p className='px-7 font-light lg:text-xl'>Live nearby? If so, make your status official by joining the Club.</p>
    <p className='underline underline-offset-4 pt-4 tracking-wide cursor-pointer duration-300 hover:text-orange-600'>LEARN MORE</p>
    </div>
    </div>


{/* ******************************************* The Canal Club Poolside ****************************************************** */}

    <div className='lg:items-center lg:flex lg:flex-col lg:w-1/3'>
      <div>
      <img src={poolSide} alt="img" className='object-cover w-full h-full '/>
    </div>
    <div>
    <h1 className='text-2xl lg:text-4xl lg:font-normal font-light p-5'>The Canal Club Poolside</h1>
    <p className='px-7 font-light lg:text-xl'>Step outside to see where the action happens.The Canal Club provides a lively, social atmosphere set among our pools and gardens.</p>
    <p className='underline underline-offset-4 pt-4 tracking-wide cursor-pointer duration-300 hover:text-orange-600'>DINING MENUS</p>
    </div>
    </div>

    </div>
    </div>

    <Footer/>
    </div>
  )
}
