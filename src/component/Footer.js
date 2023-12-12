import React from 'react'
import bg from '../assets/bg.webp'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className='text-white p-10 w-screen tracking-wide'>
      <div>
           <h1 className='text-xl lg:text-4xl lg:font-normal font-light font-serif transition-all duration-300 cursor-pointer text-white hover:text-orange-600' style={{fontFamily:'jungle'}}>D-JOS</h1> 
           <p className='font-extralight text-sm'>RESORT & SPA</p>
        </div>

        <div className='text-xs lg:text-xl mt-5 flex w-full justify-between '>
           <div className='pr-5'>
            <h1 style={{fontFamily:'jungle'}} className='text-xl pb-3 lg:text-2xl '>Address</h1>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>The D-JOS Resort & Spa</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>4925 North Scottsdale Road,</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>Scottsdale,</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>Arizona 85251</p>
            <div className='flex w-2/3 justify-between pt-5 lg:hidden'>
            <FaInstagram size={16} className='hover:text-orange-600 transition-all duration-300 cursor-pointer'/>
            <FaFacebookF size={16} className='hover:text-orange-600 transition-all duration-300 cursor-pointer'/>
            <BsTwitterX  size={16} className='hover:text-orange-600 transition-all duration-300 cursor-pointer'/>
           
            </div>
           </div>

           <div className='pr-5'>
            <h1 className='text-xl pb-3 lg:text-2xl ' style={{fontFamily:'jungle'}}>Contact</h1>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>News & Accolades</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>Careers</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>Privacy Policy</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>Sitemap</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>Accessibility</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>FAQ</p>
            </div>


           <div>
            <h1 style={{fontFamily:'jungle'}} className='text-xl pb-3 lg:text-2xl'>Reservations</h1>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>T.800 699 9588</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>T.706 299 5584</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>T.850 694 9588</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'>T.770 199 9599</p>
            </div>


           <div className='hidden lg:block'>
            <h1 style={{fontFamily:'jungle'}} className='text-xl pb-3 lg:text-2xl'>Media</h1>

            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'> <FaLinkedin size={20} className='inline pr-2'/>Linkedin</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'> <FaFacebookF size={20} className='inline pr-2'/>Facebook</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'><FaInstagram size={20} className='inline pr-2'/>Instagram</p>
            <p className='hover:text-orange-600 transition-all duration-300 cursor-pointer font-extralight text-sm pb-2 lg:text-xl'><BsTwitterX  size={20} className='inline pr-2'/>Twiter</p>
            </div>

        </div>
    </div>
  )
}
