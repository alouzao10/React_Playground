import React, { createContext, useReducer } from 'react';

import AppReducer from '../Reducer/AppReducer';

import Data from '../Data/db.json';

const initialState = {
  // Load in the data from the JSON server file
  pets: Data.pets,
  owners: Data.owners,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useReducer(AppReducer, initialState);

  function addPet(newPet) {
    setState({
      type: 'ADD_PET',
      payload: newPet,
    });
  }

  function removePet(petID) {
    setState({
      type: 'REMOVE_PET',
      payload: petID,
    });
  }

  function addOwner(newOwner) {
    setState({
      type: 'ADD_OWNER',
      payload: newOwner,
    });
  }

  function removeOwner(ownerID) {
    setState({
      type: 'REMOVE_OWNER',
      payload: ownerID,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        owners: state.owners,
        pets: state.pets,
        addPet,
        removePet,
        addOwner,
        removeOwner,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
