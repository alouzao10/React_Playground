import React from "react";
import "./App.css";

// Import useSelector to access the attributes/values of the state/store
// Similar to useing hooks like in useContent/useState
// Import useDispatch to have access to dispatch the actions we bring in
import { useSelector, useDispatch } from "react-redux";

// Import the actions to modify the state we want updated
import { increment, decrement, login, logout } from "./Redux/Actions/actions";

function App() {
   // Reference the reducers to bring in their state
   const { counter } = useSelector((state) => state.counterReducer);
   const { toggle } = useSelector((state) => state.toggleReducer);
   const dispatch = useDispatch();

   return (
      <div className='App'>
         <h1>Hello Redux</h1>
         <h3>Counter: {counter}</h3>
         <button onClick={() => dispatch(decrement(2))}>-</button>
         <button onClick={() => dispatch(increment(5))}>+</button>
         <hr />
         {toggle ? (
            <div>
               <h3>Info</h3>
               <button onClick={() => dispatch(logout())}>Log Out</button>
            </div>
         ) : (
            <div>
               <h3>Secret Info...</h3>
               <button onClick={() => dispatch(login())}>Log In</button>
            </div>
         )}
      </div>
   );
}

export default App;
