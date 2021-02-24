import React from 'react';
import "./checkoutproduct.css"
import {useStateValue} from "../context/StateProvider"

const CheckOutProduct = ({id, image, title, price , rating}) => {
    const[{basket}, dispatch] = useStateValue();
    const removeBasket = () => {
        console.log("click")
          dispatch({
              type:"REMOVE_FROM_BASKET",
              id: id
          })

          

    }
    return (
        <>
        <div className="checkoutProduct" >
            <img src={image} className="checkoutproduct_image" alt="products"/>
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title" >{title}</p>
                <p className="checkoutproduct_price">{price}</p>
                <small>$</small>
                <strong>{price}</strong>
                <div className="checkoutProduct_rating">
                {Array(rating).fill().map((_,i)=>{
                   return <p key={i}>⭐</p>
                })}
                </div>
                <button onClick={removeBasket}> Remove from Cart</button>
                
            </div>

            
        </div>
        <div className="line"></div>
        </>
    )
}

export default CheckOutProduct;
