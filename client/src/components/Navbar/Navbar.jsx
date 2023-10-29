import React from 'react'
import {Link, useNavigate} from'react-router-dom'
 import logo from "../../assests/logo.png"
 import search from "../../assests/search-solid.svg"
import {useSelector, useDispatch} from  "react-redux"

 import './Navbar.css'
import { useEffect ,useState} from 'react'
import { setCurrentUser } from '../../actions/currentUser'
import decode from 'jwt-decode'
import bars from "../../assests/bars-solid.svg";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar"
 const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSlideIn = () => {
    setSidebarOpen(!sidebarOpen);
    console.log({sidebarOpen})
  };


 
  const navigate = useNavigate();

  const dispatch= useDispatch()
    var User= useSelector((state) => (state.currentUserReducer));

    useEffect(() => {

      const token = User?.token;
      if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          handleLogout();
        }
      }
  

      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
    },[dispatch]);

    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
      navigate("/");
      dispatch(setCurrentUser(null));
    };


   return (
    <nav className='main-nav'>
     <div className='navbar'>
    
     <button className="slide-icon" onClick={handleSlideIn}>
          <img src={bars} alt="bars" width="15" />
        </button>
        <button className='nav-item nav-links' style={{marginLeft:"50px"}} onClick={()=>{navigate('/')}}>Home</button>
       <Link to ='/' className='nav-item'>
       <link rel="icon" type="image/png" href="https://img.freepik.com/premium-vector/logo-illustration-mountains-stars-night_161396-549.jpg?w=740" />
       </Link>
    
      <form>
       
       
      </form>
        {User === null ?
            <Link to="/" className='nav-item nav-links'>Log in</Link>:
        <>
      

        <button className=' nav-links' onClick={handleLogout}>Log out</button>
        </>
        
        }
     </div>
     {window.innerWidth <= 768 && <LeftSideBar isOpen={sidebarOpen} />}
     
     </nav>
   )
 }
 
 export default Navbar
 