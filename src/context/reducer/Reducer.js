export const  initialState ={
    basket: [],
    // user:null,
    
}
//selector

export const getBasketTotal =(basket)=>{
   return basket?.reduce((amount, item)=>item.price + amount, 0)

}

// const Add_to_Basket = "hello";

const reducer = (state, action) =>{
    console.log(state)
  
     switch(action.type){
         case 'ADD_TO_BASKET':
             return {
                 ...state,
                 basket:[...state.basket,action.item],
             };
             default:
                 return state;
     }
}


export default reducer;