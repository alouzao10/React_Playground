import React from "react";

import Ingredients from "./Ingredients";

function Recipe({ recipe, key }) {
   return (
      <div className='recipeCard'>
         <h2>{recipe.label}</h2>
         <img src={recipe.image} />
         <p>{recipe.calories.toFixed(0)} Calories</p>
         <p>Servings: {recipe.yield}</p>
         <Ingredients ingredients={recipe.ingredientLines} />
      </div>
   );
}

export default Recipe;
