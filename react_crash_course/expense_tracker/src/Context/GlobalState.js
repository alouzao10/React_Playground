// Where the Context will be created to allow the app to access global state

import React, { createContext, useReducer } from 'react';

// Import the Reducer
import AppReducer from '../Reducer/AppReducer';

// Initial State Object
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
};

// Create the Global Context to use the initialState
export const GlobalContext = createContext(initialState);

// Create a Provider to allow components access to the global state/context
export const GlobalProvider = ({ children }) => {
  // Use a Reducer to reference the global state
  // Returns a new state based on the actions of the Reducer methods
  // Passes in the current instance of the global state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Return the Provider for access of the components to the global context and state
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
