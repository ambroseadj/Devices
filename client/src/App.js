import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes.jsx'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import LeftSideBar from "./components/LeftSideBar/LeftSideBar"
import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'



function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const dispatch =useDispatch()
useEffect(() => {

  
  
},[dispatch])
  





  return (
    <div className="App">
      <Router>
      
        <Navbar  />
       
        
        <AllRoutes />
      
        
    </Router>
    </div>
     
  )
}

export default App;
