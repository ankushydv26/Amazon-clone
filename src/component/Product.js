import React from 'react'
import "./product.css"
import  { useStateValue} from  "../context/StateProvider"
function Product({id,title, price , image,rating}) {
    const [state, dispatch] = useStateValue();
     console.log('this basket ' +  state)
    const addToBasket = () => {
        //dispatch the item into data layer;
        
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        })

    }
    return (
        <div className="product">
            <div className="product-info">
                <p className="product_title">{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i) =>{
                       return <p key={i}>⭐</p>
                    })}                    
                </div>
            </div>
            <img src={image} alt="work from home" />
            <div className="btn">
              <button 
              onClick={addToBasket}
              className="btn-addbasket">Add to basket</button>
            </div>
        </div>
    )
}

export default Product;
