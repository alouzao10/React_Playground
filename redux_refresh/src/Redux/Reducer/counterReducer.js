// Create the initial state for the reducer
const initialState = {
   counter: 0,
};

// Create the reducer functions based on the passed in action
const counterReducer = (state = initialState, action) => {
   switch (action.type) {
      case "INCREMENT":
         return { ...state, counter: state.counter + action.payload };
      case "DECREMENT":
         return { ...state, counter: state.counter - action.payload };
      default:
         return state;
   }
};

export default counterReducer;
