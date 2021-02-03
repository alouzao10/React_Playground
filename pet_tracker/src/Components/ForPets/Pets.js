import React, { useContext } from 'react';

import { GlobalContext } from '../../Context/GlobalState';

function Pets() {
  const { pets } = useContext(GlobalContext);
  return (
    <div>
      <h1>Pets</h1>
      {pets.map((pet) => (
        <>
          <h3>{pet.name}</h3>
          <p>
            Is a {pet.type} of {pet.breed}
          </p>
          <p>Is {pet.age} years old</p>
          <p>Is currently owned by {pet.owner}</p>
          <hr />
        </>
      ))}
    </div>
  );
}

export default Pets;
