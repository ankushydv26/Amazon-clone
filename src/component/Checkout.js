import React from 'react'
import Banner from "../asset/image/banner.jpg";
import "./checkout.css"
import Subtotal from "../component/Subtotal.js"

function Checkout() {
    return (
        <>
        <div className="banner-container">
              <img src={Banner} alt="banner" className="banner-img"/>   
        </div>
        <div className="checkout">
            
            <div className="checkout-list">
                <h2>Your Shopping Basket</h2>
               

            </div>
            <div className="checkout-details">
                <h2>Your Sub total</h2>
                <Subtotal/>

            </div>
        </div>
        </>
    )
}

export default Checkout