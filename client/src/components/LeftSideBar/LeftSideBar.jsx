import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom'

import "./LeftSideBar.css"
const LeftSideBar = ({isOpen,onClose}) => {
    
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleLinkClick = () => {
        
        setSidebarOpen(!sidebarOpen);
      };
  return (
    <div className={`left-sidebar ${isOpen ? 'open' : ''}`}>
    
        <nav className="side-nav">
            
       
                <NavLink to="/Adminlog" className="side-nav-links" activeclassname="active" style={{paddingLeft:'20px'}}onClick={handleLinkClick}>
                <p>Admin panel</p>
                </NavLink>
            
            <div className="side-nav-div">
                <div>
                <NavLink to="/Custog" className="side-nav-links" activeclassname="active" style={{paddingLeft:"20px"}}  onClick={handleLinkClick}>
                    <p>Customer Panel</p>
                    </NavLink>
                </div>
                
             
            
                

            </div>
           
        </nav>
      
    </div>
  )
}

export default LeftSideBar
