import React from 'react'
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css"
import {useStateValue}  from "../context/StateProvider"
import {getBasketTotal} from "../context/reducer/Reducer"

function Subtotal() {
    const [{basket}] = useStateValue();

    // const total = (basket) =>{
    //    return basket.reduce((total,item) => item.price+ total,0)
    // }

    return (
        <div className="subtotal">
         <CurrencyFormat
           renderText={(value)=> (
               <>
               <p>Subtotal ({basket?.length} items)<strong>{value}</strong> </p>
               <small className="subtotal_gift" >
                   <input type="checkbox" />
                   This order contains a gift
               </small>
               </>
           )}
           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeparator={true}
           prefix={'$'}

         />  
         <button> Procced to checkout</button> 
        </div>
    )
}

export default Subtotal
