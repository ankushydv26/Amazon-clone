import React from 'react';
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from "react-router-dom"
import {useStateValue} from "../context/StateProvider";

import {useAuth} from './logContext'




const Header = () => {
    const [{basket}, dispatch] = useStateValue();
  
  const {isSignIn,setIsSignIn } = useAuth()


  const handleSignOut = () =>{
    
    setIsSignIn(true)

  }


  console.log( isSignIn)

    return (
        <>
        {/* <div style={{display: 'none'}} >
        <SignUpForm logInfo={logInfo} />
        </div>
        <div style={{display: 'none'}} >
        <Signin logInfo={logInfo}/>
        </div> */}
        <div className="header">
          <h3 className="logo">Ashish</h3>
          <div className="header_search">
              <input
               className="header_searchInput"
               type="text"
               placeholder=""
              />
              <SearchIcon className="search_icon"/>
          </div>
          <div className="header_nav">
              {isSignIn ? <> <div className="header_options">
                  <Link className="header_option2" to="/signin" style={{color:'white'}}>
                      Sign In
                  </Link>
              </div>
              <div className="header_options">
                  <Link className="header_option2" to="/Signup" style={{color:'white'}}>
                      Sign Up
                  </Link>
              </div> </> : <p onClick={handleSignOut}>Log out</p>}
              <div className="header_options">
                  <span className="header_option1">
                      Returns
                  </span>
                  <span className="header_option2">
                      Orders
                  </span>
              </div>
              <div className="header_options">
                  <span className="header_option1">
                      your
                  </span>
                  <span className="header_option2">
                      Prime
                  </span>
              </div>
          </div>
          <Link to="/checkout">
            <div className="header_basket">
                <AddShoppingCartIcon className="header_basket_icon"/>
                <span className="header_option2 header_custom">
                    {basket?.length}
                </span>
            </div>
          </Link>
        </div>
        </>
    )
}

export default Header;
