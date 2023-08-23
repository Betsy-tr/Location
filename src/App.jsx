import React from 'react'
import Liste from './Liste'
import Detail from './Detail'
import { Route, Routes } from 'react-router-dom'
import Location from './Location'

import './App.css'



function App() {
  

  return (
    <>
      <Routes>

        <Route path='/' element={<Liste/>}/>
        <Route path='/detail/:idlocation' element={<Detail/>}/>

      </Routes>
      
    </>
  )
}

export default App
