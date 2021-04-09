// Create the initial state for the reducer
const initialState = {
   toggle: false,
};

// Create the reducer functions based on the passed in action
const toggleReducer = (state = initialState, action) => {
   switch (action.type) {
      case "LOGIN":
         return { ...state, toggle: action.payload };
      case "LOGOUT":
         return { ...state, toggle: action.payload };
      default:
         return state;
   }
};

export default toggleReducer;
