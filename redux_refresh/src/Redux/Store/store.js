import { createStore } from "redux";
import appReducers from "../Reducer/appReducers";

// Create the initial state for the application
let initialState = {};

// Create the store to maintain the initial state and reducers needed to modify the state
const store = createStore(
   appReducers,
   initialState,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
