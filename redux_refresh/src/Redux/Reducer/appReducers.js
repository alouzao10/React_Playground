import counterReducer from "./counterReducer";
import toggleReducer from "./toggleReducer";
import { combineReducers } from "redux";

// Combine all of the reducers into one manageable reducer for the store to access
// Reducers maintain their own state and is how it gets set to the store for use
const appReducers = combineReducers({
   counterReducer: counterReducer,
   toggleReducer: toggleReducer,
});

export default appReducers;
