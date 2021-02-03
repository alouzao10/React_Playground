import React, { createContext, useReducer } from 'react';

import AppReducer from '../Reducer/AppReducer';

const initialState = {
  // Load in the data from the JSON server file
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, setState] = useReducer(AppReducer, initialState);

    function addPet(newPet){
        setState({
            type: 'ADD_PET'
        })
    }
}
