import React, { useContext } from 'react';

import { GlobalContext } from '../../Context/GlobalState';

function Owners() {
  const { owners } = useContext(GlobalContext);
  return (
    <div>
      <h1>Owners</h1>
      {owners.map((owner) => (
        <>
          <h3>{owner.name}</h3>
          <p>Is the proud owner of {owner.pet}</p>
        </>
      ))}
    </div>
  );
}

export default Owners;
