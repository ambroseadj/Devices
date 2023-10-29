
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import '../../Pages/Auth/Auth.css'

import { signup, login } from "../../actions/auth";

const Mainda = () => {

  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
   }
   if (isSignup) {
     if (!name) {
       alert("Enter a name to continue");
     }
     
     dispatch(signup({name,email,password},navigate))
     alert('voila! registeration successfull')

   }else{ 
     dispatch(login({email,password},navigate))
   }
};

  
return (

  <section className="auth-section">
  
    <div className="auth-container-2">
      
      <form onSubmit ={handleSubmit}>
  
        {isSignup && (
          
          <label htmlFor="name">
            <h4>Name</h4>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
        )}
        
        <label htmlFor="email">
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
            
            <br/>
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
        {
          isSignup &&(
            <label class="checkbox-container">
           <input type="checkbox"/>
          
           </label>
          )
        }
        <button type="submit" className="auth-btn">
          Register customer
        </button>
      </form>
      <p>

   
      </p>
    </div>
  </section>
);
};

export default Mainda
