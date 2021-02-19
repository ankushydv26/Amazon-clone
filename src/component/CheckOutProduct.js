import React from 'react';
import "./checkoutproduct.css"

const CheckOutProduct = ({id, image, title, price , rating}) => {
    return (
        <div className="checkoutProduct">
            <img src={image} className="checkoutproduct_image" alt="products"/>
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title" >{title}</p>
                <p className="checkoutproduct_price">{price}</p>
                <small>$</small>
                <strong>{price}</strong>
                <div className="checkoutProduct_rating">
                {Array(rating).fill().map((_,i)=>{
                   return <p>⭐</p>
                })}
                </div>
                <button> Remove from Cart</button>
            </div>

            
        </div>
    )
}

export default CheckOutProduct;
