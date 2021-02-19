import React,{ createContext, useContext, useReducer} from 'react';

//Create layer

export const StateContext = createContext();

//Wrap all props in layer

export const StateProvider = ({reducer, initialState, children })=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

);
export const useStateValue = () => useContext(StateContext);