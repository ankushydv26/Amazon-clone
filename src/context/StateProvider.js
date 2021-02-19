import React,{ createContext, useContext, useReducer} from 'react';

//Create layer

export const StateContext = createContext();

//Wrap all data layer

export const StateProvider = ({reducer, initialState, children })=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

);
//Pull informations  from  data layer
export const useStateValue = () => useContext(StateContext);