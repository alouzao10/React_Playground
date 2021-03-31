function App() {
   const APP_ID = "ec743564";
   const API_KEY = "baeec0e7626265abdbcc7c08a0a4ed14";
   const API_URL = `https://api.edamam.com/search?q=${SEARCH_VALUE}&app_id=${APP_ID}&app_key=${API_KEY}`;

   return (
      <div className='App'>
         <h1>Hello Recipes...</h1>
      </div>
   );
}

export default App;
