// Actions that are associated with the Posts
import { NEW_POST, FETCH_POSTS } from "../Actions/ActionTypes.js";

// Create the initial state for the reducer to access
// The state represents the incoming posts from the action
const initialState = {
   posts: [],
   post: {},
};

export default function (state = initialState, action) {
   switch (action.type) {
      case NEW_POST:
         console.log("New Post Reducer");
         return {
            ...state,
            post: action.payload,
         };
      case FETCH_POSTS:
         console.log("Fetch Post Reducer");
         return {
            ...state,
            posts: action.payload,
         };
      default:
         return state;
   }
}
