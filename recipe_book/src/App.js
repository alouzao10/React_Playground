import { useState } from "react";
import "./App.css";
import Recipe from "./Components/Recipe";

function App() {
   const [search, setSearch] = useState("");
   const [recipes, setRecipes] = useState([]);

   const APP_ID = "ec743564";
   const API_KEY = "baeec0e7626265abdbcc7c08a0a4ed14";
   const API_URL = `https://api.edamam.com/search?q=`;

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (search !== "") {
         await fetch(API_URL + search + `&app_id=${APP_ID}&app_key=${API_KEY}`)
            .then((ret) => ret.json())
            .then((data) => {
               console.log(data);
               setRecipes(data.hits);
            });
      } else {
         alert("Provide a search item...");
      }
   };

   const updateSearch = (e) => {
      setSearch(e.target.value);
   };

   return (
      <div className='App'>
         <h1 className='title'>Hello Recipes!</h1>
         <form className='searchForm' onSubmit={handleSubmit}>
            <input
               className='searchBar'
               type='text'
               name='search'
               value={search}
               onChange={updateSearch}
            />
            <button className='searchButton' type='submit'>
               Search
            </button>
         </form>
         {recipes.length === 0 ? (
            <h1 className='title error'>No Recipes To Show</h1>
         ) : (
            <div className='recipes'>
               {recipes.map((recipe, i) => (
                  <Recipe recipe={recipe.recipe} key={i} />
               ))}
            </div>
         )}
      </div>
   );
}

export default App;
