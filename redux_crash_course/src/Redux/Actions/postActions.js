// Import the Actions for use to pass into the Reducer
import { FETCH_POSTS, NEW_POST } from "./ActionTypes";

// Import the store to dispatch the actions to the reducer
import store from "../Store/Store";

// Export the Action Functions for use within the Components
// Pass in another fucntion for use of the dispatch to call the reducer
export const fetchPosts = () => (dispatch) => {
   // Make the fetch request to get posts on the component initial render
   console.log("Fetch Post Action...");
   fetch("https://jsonplaceholder.typicode.com/posts")
      .then((ret) => ret.json())
      .then((data) => {
         dispatch({
            type: FETCH_POSTS,
            payload: data,
         });
      }); // Send the data/posts into the reducer and call the action
};

export const createPost = (postData) => (dispatch) => {
   console.log("New Post Action...");
   fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
         "content-type": "application/json",
      },
      body: JSON.stringify(postData),
   })
      .then((ret) => ret.json())
      .then((data) => {
         dispatch({
            type: NEW_POST,
            payload: data,
         });
      });
};
