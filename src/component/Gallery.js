import React, { useEffect } from 'react'
import Nav from '../component/Nav.js'
import Footer from './Footer.js'
import pool from '../assets/pool.mp4'
import lagoon from '../assets/lagoon.mp4'
import courtyard from '../assets/courtyard.mp4'
import suite from '../assets/suite.mp4'
import Access from '../assets/Access.png'
export default function Gallery() {

  useEffect(function(){
    window.scroll(0,0)
  },[])

  return (
    <div className='text-lime-900 tracking-widest w-screen 'style={{fontFamily:'jungle'}}>
    <Nav/>
 {/******************************************** ROOM ****************************************************** */}

    <div className='mt-32 text-center p-10'>
    <p className='font-light lg:text-xl '>Rooms</p>
    <h1 className='text-2xl lg:text-6xl lg:font-normal font-light p-5'>Stay with us</h1>
    <p className='font-light lg:text-xl pb-10'>Warm wooden furniture and old world bronze combine to create an inviting luxury experience in vibrant Sonoran style.</p>

 {/************************************** Pool View Guestroom  ************************************** */}

    <div className='lg:flex w-full lg:w-full lg:justify-around'>

    <div className='lg:items-center lg:flex lg:flex-col lg:w-1/3 pb-16'>
      <div >
      <video src={pool} autoPlay loop muted className='object-cover w-full h-full '/>
    </div>
       
    <div>
    <h1 className='text-2xl lg:text-4xl lg:font-normal font-light p-5'>Pool View Guestroom</h1>
    <p className='px-7 font-light lg:text-xl'>Take in relaxing resort views of our sandy beach-bottom or lushly landscaped main pool.</p>
    <p className='underline underline-offset-4 pt-4 tracking-wide cursor-pointer duration-300 hover:text-orange-600'>LEARN MORE</p>
    </div>
    </div>

{/************************************** Lagoon View Guestroom  ************************************** */}

    <div className='lg:items-center lg:flex lg:flex-col lg:w-1/3'>
      <div>
      <video src={lagoon} autoPlay loop muted className='object-cover w-full h-full'/>
    </div>
    <div>
    <h1 className='text-2xl lg:text-4xl lg:font-normal font-light p-5'>Lagoon View Guestroom</h1>
    <p className='px-7 font-light lg:text-xl'>These 400-square-foot guestrooms are situated around our Mediterranean-inspired lagoon.</p>
    <p className='underline underline-offset-4 pt-4 tracking-wide cursor-pointer duration-300 hover:text-orange-600'>LEARN MORE</p>
    </div>
    </div>

    </div>
    </div>


  {/************************************** Courtyard Guestroom  ************************************** */}

    
    <div className='text-center p-10'>
    
    <div className='lg:flex w-full lg:w-full lg:justify-around'>

    <div className='lg:items-center lg:flex lg:flex-col lg:w-1/3 pb-16'>
      <div >
      <video src={courtyard} autoPlay loop muted className='object-cover w-full h-full '/>
    </div>
    <div>
    <h1 className='text-2xl lg:text-4xl lg:font-normal font-light p-5'>Courtyard Guestroom</h1>
    <p className='px-7 font-light lg:text-xl'>Enjoy gorgeous garden views from this 400-square-foot guestroom.</p>
    <p className='underline underline-offset-4 pt-4 tracking-wide cursor-pointer duration-300 hover:text-orange-600'>LEARN MORE</p>
    </div>
    </div>

    {/*********************************   Suites  ********************************* */}

    <div className='lg:items-center lg:flex lg:flex-col lg:w-1/3'>
      <div>
      <video src={suite} autoPlay loop muted className='object-cover w-full h-full '/>
    </div>
    <div>
    <h1 className='text-2xl lg:text-4xl lg:font-normal font-light p-5'>Suites</h1>
    <p className='px-7 font-light lg:text-xl'>From one-bedroom Parlor Suites to our spacious Presidential Suite.</p>
    <p className='underline underline-offset-4 pt-4 tracking-wide cursor-pointer duration-300 hover:text-orange-600'>LEARN MORE</p>
    </div>
    </div>

    </div>
    </div>


    <div className='text-center p-10 lg:px-60 lg:my-40 my-20' >
        <h1 className='text-2xl lg:text-4xl'>“The remodels are simply stunning. So much detail in the lobby, bar, and restaurant.”</h1>
        <p className='font-light lg:text-xl pt-2'>Catherine Kastner</p>
        <p className='font-light lg:text-xl'>San Diego, California</p>
    </div>


 {/*********************************   Accessible Accommodations ********************************* */}


    <div className='text-center p-10'>
    
    <div className='lg:flex w-full lg:w-full lg:justify-around'>

    <div className='lg:items-center lg:flex pb-16 lg:w-full lg:justify-around'>
      <div className='lg:w-1/3'>
      <img src={Access} alt='' className='object-cover w-full h-full '/>
    </div>
    <div className='text-left lg:w-1/3'>
    <h1 className='text-2xl lg:text-4xl lg:font-normal font-light px-7 py-5'>Accessible Accommodations</h1>
    <p className='px-7 font-light lg:text-xl'>The Scott Resort & Spa also offers rooms to accommodate guests with disabilities.</p>
    <p className='px-7 font-light lg:text-xl py-5'>If you have questions or wish to make a reservation, you can book online or call our Reservation Specialist at 480 945 7666 or email tsrinfo@thescottresort.com. We are happy to make special arrangements for you, and some advanced notice will help us have everything ready for your arrival.</p>
    <p className='underline underline-offset-4 px-7 pt-2 tracking-wide cursor-pointer duration-300 hover:text-orange-600'>LEARN MORE</p>
    </div>
    </div>


    </div>
    </div>


    <Footer/>

      </div>
  )
}
