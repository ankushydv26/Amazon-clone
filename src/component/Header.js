import React from 'react'
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from "react-router-dom"
import {useStateValue} from "../context/StateProvider";



const Header = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
          <h3 className="logo">Amazon</h3>
          <div className="header_search">
              <input
               className="header_searchInput"
               type="text"
               placeholder=""
              />
              <SearchIcon className="search_icon"/>
          </div>
          <div className="header_nav">
              <div className="header_options">
                  <span className="header_option1">
                      Hello , user name
                  </span>
                  <span className="header_option2">
                      Sign In
                  </span>
              </div>
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
    )
}

export default Header;
