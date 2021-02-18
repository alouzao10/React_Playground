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
      action: 'ADD_PET',
      data: newPet,
    });
  }

  function removePet(petID) {
    setState({
      action: 'REMOVE_PET',
      data: petID,
    });
  }

  function addOwner(newOwner, petID) {
    setState({
      action: 'ADD_OWNER',
      data: { newOwner, petID },
    });
  }

  function removeOwner(ownerID) {
    setState({
      action: 'REMOVE_OWNER',
      data: ownerID,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        owners: initialState.owners,
        pets: initialState.pets,
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
