// Import all of the redicers into the main app reducer for use
import { combineReducers } from "redux";

// Import the external reducers
import postReducer from "./postReducer";

// Export the main app redicer to the store
export default combineReducers({
   posts: postReducer,
});
