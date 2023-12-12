import React, { useState,useEffect } from 'react'
import BGimg from '../assets/bg.webp'
import vid from '../assets/intro.mp4'
import { Link } from 'react-router-dom'

export default function LandingPG() {

  const [content,setContent]=useState('text-white text-center lg:text-left p-5 mt-5 lg:absolute lg:top-72  -left-72')
  useEffect(function(){
    setContent(`text-white text-center lg:text-left p-5 mt-5 lg:absolute lg:top-72  lg:left-20 transition-all duration-1000`)
  },[]);


  return (
    <div className='tracking-widest text-white p-10 w-screen'style={{backgroundImage:`url(${BGimg})`,fontFamily:'jungle'}}>
       <div className='w-full pt-16 lg:pt-40 lg:pr-40 lg:pl-40 lg:pb-32'><video src={vid} autoPlay loop muted className='w-full object-cover border-white border-solid border'/></div>
       <div className={content}>
        <span className='font-normal text-3xl lg:text-7xl tracking-widest pr-2'>Find</span>
        <span className='font-normal text-3xl lg:text-7xl tracking-widest lg:block'>Yourself</span>
        <span className='font-normal text-3xl lg:text-7xl tracking-widest block'>Here</span>
        <Link to={'/gallery'}><button type="button" class="py-5 px-10 lg:px-16 mt-8 me-2 mb-2 text-base lg:text-xl font-medium focus:outline-none border rounded border-white-400 hover:bg-white hover:text-lime-900 duration-500">Explore Now</button></Link>
        </div>
    </div>
  )
}
