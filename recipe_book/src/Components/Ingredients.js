import React from "react";

function Ingredients({ ingredients }) {
   return (
      <div>
         <ul>
            {ingredients.map((ingredient, i) => (
               <li key={i}>{ingredient}</li>
            ))}
         </ul>
      </div>
   );
}

export default Ingredients;
