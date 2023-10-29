
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../Auth/Auth.css";


import { signup, login } from "../../actions/auth";
const Custog= () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
   const navigate = useNavigate();



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
                
              <h4>Display Name</h4>
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
          <h1 style={{textAlign:"center",marginTop:"3px"}}>Customer Login</h1>
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
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password?
                </p>
              )}
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
        
          <button type="submit" className="auth-btn">
         Login
          </button>
        </form>
       
      </div>
    </section>
  );
};

export default Custog;