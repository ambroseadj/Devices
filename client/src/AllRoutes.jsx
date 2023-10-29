import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Mainda from './Pages/Mainda/Mainda'
import Admina from './Pages/Admina/Admina'
import Adminlog from './Pages/Adminlog/Adminlog'
import Custog from './Pages/Custog/Custog'
import Custmain from './Pages/Custmain/Custmain'
import Admain from './Pages/Admain/Admain'
const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
    <Route  path='/' element={<Home />}/>
    <Route  path='/Auth' element={<Auth/>}/>
    <Route  path='/Mainda' element={<Mainda/>}/>
    <Route path="/Admina" element={<Admina/>}/>
    <Route path="/Adminlog" element={<Adminlog/>}/>
    <Route path="/Custog" element={<Custog/>}/>
    <Route path="/Custmain" element={<Custmain/>}/>
    <Route path="/Admain" element={<Admain/>}/>
    </Routes>
  )
}

export default AllRoutes
