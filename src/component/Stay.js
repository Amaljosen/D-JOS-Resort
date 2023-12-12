import React, { useState } from 'react'
import pool from '../assets/pool.png'
import lagoon from '../assets/lagoon.png'
import courtyard from '../assets/courtyardd.png'
import suite from '../assets/suite.png'
import {Link} from 'react-router-dom'


export default function Stay() {

    const [value,setvalue]=useState(pool)

  return (
    <div className='text-lime-900 text-center tracking-widest w-screen mt-5 mb-10'style={{fontFamily:'jungle'}}>
      <h1 className='text-2xl lg:text-6xl lg:font-normal font-light p-5'>Stay With Us</h1>
      <p className='px-7 font-light lg:text-xl'>A sanctuary set against Scottsdale’s historic downtown</p>
      <div className='lg:flex lg:items-center lg:w-screen lg:justify-around'>
        <div  className='p-10 lg:w-2/5'>
        <img src={value} loading="lazy" alt="img" className='object-cover w-full h-full '/>
        </div>
        <div className='text-xl lg:text-4xl lg:text-left lg:mt-5'>
            <span className='font-light hover:text-orange-600 cursor-pointer transition-all duration-300' onClick={()=>setvalue(pool)}>Pool View Room</span>
            <hr className='p-2 lg:p-5 w-4/5 mx-auto lg:w-full'/>
            <span className='font-light hover:text-orange-600 cursor-pointer transition-all duration-300' onClick={()=>setvalue(lagoon)}>Lagoon View Room</span>
            <hr className='p-2 lg:p-5 w-4/5 mx-auto lg:w-full'/>
            <span className='font-light hover:text-orange-600 cursor-pointer transition-all duration-300' onClick={()=>setvalue(courtyard)}>Courtyard Room</span>
            <hr className='p-2 lg:p-5 w-4/5 mx-auto lg:w-full'/>
            <span className='font-light hover:text-orange-600 cursor-pointer transition-all duration-300' onClick={()=>setvalue(suite)}>Suites</span>
            <hr className='p-2 lg:p-5 w-4/5 mx-auto lg:w-full'/>
            <Link to={'/gallery'}><button type="button" class="py-5 px-10 mt-5 me-2 mb-2 text-base lg:text-xl font-medium  focus:outline-none border rounded border-gray-400 hover:bg-lime-900 hover:text-white duration-500">View All Rooms</button></Link>
        </div>
      </div>
    </div>
  )
}
