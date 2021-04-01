import "./App.css";

import PostForm from "./Components/PostForm";
import Posts from "./Components/Posts";

function App() {
   return (
      <div className='App'>
         <PostForm />
         <hr />
         <Posts />
      </div>
   );
}

export default App;
