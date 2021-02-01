// Create the Reducer to specify the actions that will modify the current state
// Returns the update state to be used globally based on the action/function call

export default (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
      break;
    case 'DELETE':
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      break;
  }
};
