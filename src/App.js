import React from 'react'
import Gallery from './component/Gallery'
import Home from './component/Home'
import {Route,Routes} from 'react-router-dom'
import Dinning from './component/Dinning'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/dining' element={<Dinning/>}/>
      </Routes>
    </div>
  )
}
export default App
