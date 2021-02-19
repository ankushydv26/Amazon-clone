export const  initialState ={
    basket: [],
}

// const Add_to_Basket = "hello";

const reducer = (state=[], action) =>{
    // console.log(state)
     switch(action.type){
         case 'Add_to_Basket':
             return {
                 ...state,
                 basket:[...state,action.payload],
             };
             default:
                 return state;
     }
}

export default reducer;