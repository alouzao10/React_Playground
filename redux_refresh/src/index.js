import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Import Redux Items
//import { createStore } from "redux";

// REACT REDUX

// ACTION
// Describes what you want to do for the state/store
// Provides an action to execute and the data needed to perform the action
// A function that returns an object
/*const increment = () => {
   return {
      type: "INCREMENT",
      payload: 1,
   };
};

const decrement = () => {
   return {
      type: "DECREMENT",
      payload: 1,
   };
};*/

// REDUCER -> Have multiple depending on the size and content of the state
// Describes how the actions wil modify the state and return new state
// Performs the actual tasks requested by the action call
// A function that takes in the initial state and the action object
// Returns an updated copy of the initial state
/*const counterReducer = (state = 0, action) => {
   switch (action.type) {
      case "INCREMENT":
         return state + 1;
      case "DECREMENT":
         return state - 1;
      default:
         return state;
   }
};*/

// STORE -> Globalized State
// The state that is managed globally throughout the application
// State is accessibly by components and updates when modifications are made
//let store = createStore(counterReducer);

// Display the store in the console
// Will be called when the store is updated
//store.subscribe(() => console.log("Store = ", store.getState()));

// DISPATCH
// How the action is executed to the reducer by passing in elements needed
// Executed by the store to pass in the action into the reducer
/*store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());*/

// Hook up the Store to the application
// Import the Store for use in the application
import store from "./Redux/Store/store";
// Import the Provider to connect the store to the application
import { Provider } from "react-redux";

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
);
