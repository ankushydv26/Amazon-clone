import React from 'react'

const CheckOutProduct = ({id, image, title, price , rating}) => {
    return (
        <div className="checkoutProduct">
            <img src={image} alt="products"/>
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title" >{title}</p>
                <p className="checkoutproduct_price">{price}</p>
                <small>$</small>
                <strong>{price}</strong>
                {Array(rating).fill().map(()=>{
                    <p>⭐</p>
                })}
            </div>
            
        </div>
    )
}

export default CheckOutProduct;
