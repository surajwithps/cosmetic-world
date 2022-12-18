import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
function Allroute() {
  return (
   <Routes>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Home/>}></Route>
    <Route path='/signup' element={<Login />}></Route>
   </Routes>
  )
}

export default Allroute