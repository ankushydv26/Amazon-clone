import React, { useState } from 'react';

import firebase from './firebase/Config';

// firebase.initializeApp(firebaseConfig);

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setMessage('Sign-up successful! You can now log in.');
    } catch (error) {
      setMessage('Sign-up failed. ' , error.message);
      
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
          <h2>Create a account</h2>
          <form onSubmit={handleSignUp}>
          <div><p>Email</p></div>   
            <div >
              <input
                type="email"
                title="email"
                placeholder="email"
                style={{ marginTop: "8px", padding: "10px" ,width:'100%' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div><p>Password</p></div>   
            <input
              type="password"
              title="password"
              placeholder="password"
              style={{ marginTop: "8px", padding: "10px", width:'100%' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div >
              <button type="submit" className="button-input">Create account</button>
            </div>
          </form>
        </div>
        <form />
      </div>
    </div>
    </>
  );
};

export default SignUpForm;
