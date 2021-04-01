// Import the elements needed for Redux
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";

import "./App.css";

import PostForm from "./Components/PostForm";
import Posts from "./Components/Posts";

// The Provider is how the state/store can be accessed from each nested component
// The store is created with an initial state
function App() {
   return (
      <Provider store={store}>
         <div className='App'>
            <PostForm />
            <hr />
            <Posts />
         </div>
      </Provider>
   );
}

export default App;
