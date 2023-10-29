import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Adminlog.css"
const Adminlog = ({ authData }) => {
    const [email,setEmail]= useState("");
    const[password,setPassword]= useState("");
    const navigate= useNavigate();


const handleLogin=()=>{
    
    if (email=== 'admin@123'  && password==="test123"){
        navigate('/Admina');
    }else{
        alert('Login failed. Please check your email and password.')
    }
}

  return (
    <section className="auth-section">
   
    <div className="auth-container-2">
  
      <form >
        
        
        <label htmlFor="email">
            <h1 style={{textAlign:"center",marginTop:"3px"}}>Admin Login(testid:admin@123,testpass:test123)</h1>
          <h4>Email</h4>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>Password</h4>
          
          </div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              
            }}
          />
          
        </label>
     
        <button onClick={handleLogin} type="submit" className="auth-btn">
                Login
        </button>
      </form>
      
    </div>
  </section>
    
  )
}

export default Adminlog
