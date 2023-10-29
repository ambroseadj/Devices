import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import './Admina.css'
import { NavLink } from 'react-router-dom'

const Admina = () => {


  return (
    <div className='som'>
      <LeftSideBar/>
      
      <NavLink to="/Mainda"><button className="cust" > Register customers</button></NavLink>
      <NavLink to="/Admain"><button className='cust1'>  Devices</button></NavLink>
    </div>
  )
}

export default Admina
