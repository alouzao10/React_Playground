// Creating the Store to manage State throughout the App
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import appReducer from "../Reducer/appReducer";

// Create the initial state for the applicaiton
const initialState = {};

// Include any middleare to have access to the action dispatches
const middleWare = [thunk];

// Create the store containing the initla state and reducer
// The middleware is an optional element, used to access dispatch directly
const store = createStore(
   appReducer,
   initialState,
   compose(
      applyMiddleware(...middleWare),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
         window.__REDUX_DEVTOOLS_EXTENSION__()
   )
);

export default store;
