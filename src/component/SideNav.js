import React from 'react'
import { TfiClose } from "react-icons/tfi";
import BGimg from '../assets/bg.webp'
import {Link, useNavigate} from 'react-router-dom'

export default function SideNav({click,setclick}) {
  const nav=useNavigate()
  const ko=()=>{
      nav('/')
  }
    function setclose(){
        setclick(true)
    }
    var rt= click ?'md:-right-1/3 -right-full':'md:right-0'
    var cls=`text-white h-screen w-screen md:w-4/12 absolute z-20 top-0 transition-all duration-1000 ${rt}`
    
  return (
    <div className={cls} style={{backgroundImage:`url(${BGimg})`,fontFamily:'jungle',position:'fixed'}}>
        <div className='flex justify-between items-center'>
        <div className='ml-5 p-6'>
           <h1 className='text-xl lg:text-4xl lg:font-normal font-light font-serif hover:text-orange-600 transition-all duration-500 cursor-pointer'>D-JOS</h1> 
           <p className='font-extralight text-sm'>RESORT & SPA</p>
        </div>
        <div className='p-6 cursor-pointer transition-all duration-500 hover:text-orange-600 hover:rotate-90' onClick={setclose} setclose={setclose}><TfiClose size={30}/></div>
        </div>

       <ul className='pl-10 pb-5 flex flex-col justify-between h-5/6' onClick={setclose}>
        <Link to={'/gallery'}><li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>01</span> Stay</li></Link>
        <Link to={'/dining'}><li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>02</span> Eat and Drink</li></Link>
        <a href="#spa" onClick={ko}><li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>03</span> Spa and Wellness</li></a>
        <Link to={'/gallery'}><li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>04</span> Pools</li></Link>
        <li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>05</span> Location</li>
        <a href="#event" onClick={ko}><li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>06</span> Meetings and Events</li></a>
        <a href="#event" onClick={ko}><li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>07</span> Weddings</li></a>
        <Link to={'/'}><li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>08</span> What's On</li></Link>
        <Link to={'/'}><li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>09</span> Packages</li></Link>
        <Link to={'/gallery'}><li className='text-2xl font-extralight cursor-pointer hover:text-orange-600 duration-300'><span className='font-normal text-xl pr-2'>10</span> Gallery</li></Link>
       </ul>

    </div>
  )
}
