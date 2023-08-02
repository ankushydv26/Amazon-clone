import React from "react";
import { useState } from "react";
import {Link , useHistory} from "react-router-dom"
import { useAuth } from "./logContext";




import firebase from './firebase/Config';

import "./Signin.css";



const Signin = (logInfo) => {

  const [email, SetEmail] = useState("");
  const [password, Setpassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory(); // Get the history object
  const { isSignIn,setIsSignIn } = useAuth()
  
  console.log("from sign comp" , isSignIn);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/');
      setIsSignIn(false)
      console.log('Logged in with email and password');
    } catch (error) {
      console.error('Error signing in:', error , error.message);
      setMessage(error.message)
    }
  };
  return (
    <>
    <p style={{color:'red' ,display:'flex' , justifyContent:'center' , marginTop:'30px'}} >{message}</p>
   
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <div className="box-main">
        <div style={{ padding: "30px" }}>
          <h2>Sign in</h2>
          <form onSubmit={handleEmailSignIn}>
          <div><p>Email</p></div>   
            <div >
              <input
                type="email"
                title="email"
                placeholder="email"
                style={{ marginTop: "8px", padding: "10px" ,width:'100%' }}
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
              />
            </div>
            <div><p>Password</p></div>   
            <input
              type="password"
              title="password"
              placeholder="password"
              style={{ marginTop: "8px", padding: "10px", width:'100%' }}
              value={password}
              onChange={(e) => Setpassword(e.target.value)}
            />
            <div >
              <button type="submit" className="button-input">Sign In</button>
            </div>
          </form>
      <p style={{margin:'10px'}}>Did't a have account click here <Link to="Signup">Create account</Link>. </p>

        </div>
        <form />
      </div>
    </div>
    </>
  );
};

export  default Signin;
