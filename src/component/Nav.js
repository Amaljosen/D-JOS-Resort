import React, {  useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { IoIosCall} from "react-icons/io";
import { FaConciergeBell } from "react-icons/fa";
import { CgMenuHotdog } from "react-icons/cg";
import SideNav from './SideNav';

export default function Nav() {
  const location=useLocation()
  const [click,setclick]=useState(true)
  const [scrolling, setScrolling] = useState(false);
  const [color,setColor]=useState(false)
  
  useEffect(() => {
    
    if (location.pathname === '/gallery' || location.pathname === '/dining') {
      setColor(true);
      setScrolling(true);
    } else {
      setColor(false);
    }
  }, [location.pathname,scrolling]);

 

  function check(){
    setclick(false)
    
  }
 
  const handleScroll = () => {
   
    if (window.scrollY > 0) {
      setScrolling(true);
    }
    else {
      setScrolling(false);
    }
  };

  
  window.addEventListener('scroll', handleScroll);
  
  
  
  const navClassName = `flex justify-between p-7  items-center tracking-widest fixed w-screen top-0 z-10 ${
    scrolling ? 'bg-white text-lime-900' : 'text-white' } ${color?'bg-white text-lime-900':''}`
  const logo=`text-xl lg:text-4xl lg:font-normal font-light font-serif transition-all duration-300 cursor-pointer ${
    scrolling ? 'text-orange-600':'text-white hover:text-orange-600'
  }`
 
  return (
    <div> 
      <SideNav click={click} setclick={setclick}/>
      <nav className={navClassName} >
        
        <div className='ml-5 lg:ml-10 ' >
           <h1 className={logo} style={{fontFamily:'jungle'}}>D-JOS</h1> 
           <p className='font-extralight text-sm'>RESORT & SPA</p>
        </div>
        <ul className='flex w-2/5 justify-around lg:text-xl'style={{fontFamily:'jungle'}}>
           <li className='flex items-center hover:text-orange-600 transition-all duration-300 cursor-pointer'><i className='mr-2'><IoIosCall/></i><i className='hidden lg:block'>Reservations</i></li>
           <li className='flex items-center hover:text-orange-600 transition-all duration-300 cursor-pointer'><i className='mr-2'><FaConciergeBell /></i><i className='hidden lg:block'>900 452 6371</i></li>
           <li className='lg:hidden hover:text-orange-600 transition-all duration-300 cursor-pointer hover:rotate-90' onClick={check}><CgMenuHotdog size={30}/></li>
           <li className='hidden lg:block hover:text-orange-600 transition-all duration-300 cursor-pointer hover:rotate-180' onClick={check}><CgMenuHotdog size={40}/></li>
        </ul>
      </nav>
    </div>
  )
}
