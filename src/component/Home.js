import React from 'react'
import Nav from '../component/Nav'
import LandingPG from '../component/LandingPG'
import Stay from '../component/Stay'
import Imbibe from '../component/Imbibe'
import Relax from '../component/Relax'
import Event from '../component/Event'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <div>
       <Nav/>
      <LandingPG/>
      <Stay/>
      <Relax/>
      <Imbibe/>
      <Event/>
      <Footer/>
    </div>
  )
}
