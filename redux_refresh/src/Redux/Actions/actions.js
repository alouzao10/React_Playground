// Import the action types for use
import { INCREMENT, DECREMENT, LOGIN, LOGOUT } from "./actionTypes";

// Actions for the Counter reducer
export const increment = (num) => {
   return {
      type: INCREMENT,
      payload: num,
   };
};

export const decrement = (num) => {
   return {
      type: DECREMENT,
      payload: num,
   };
};

// Actions for the Toggle reducer
export const login = () => {
   return {
      type: LOGIN,
      payload: true,
   };
};

export const logout = () => {
   return {
      type: LOGOUT,
      payload: false,
   };
};
