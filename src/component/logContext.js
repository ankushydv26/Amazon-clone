// src/AuthContext.js
import React, { useContext, useState, useEffect } from 'react';


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isSignIn, setIsSignIn] = useState(true);

 

 

  const value = {
    isSignIn,
    setIsSignIn
  };

  return (
    <AuthContext.Provider value={value}>
       {children}
    </AuthContext.Provider>
  );
}
