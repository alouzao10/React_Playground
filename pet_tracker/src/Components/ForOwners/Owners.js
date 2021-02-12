import React, { useContext, useState } from 'react';

import { GlobalContext } from '../../Context/GlobalState';

function Owners() {
  const { owners } = useContext(GlobalContext);

  const [name, setOwnerName] = useState('');
  const [pet, setOwnerPet] = useState('');

  const updateOwnerInfo = (e) => {
    let field = e.target.name;
    let value = e.target.value;
    switch (field) {
      case 'ownerName':
        setOwnerName(value);
        break;
      case 'ownerPet':
        setOwnerPet(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='sectionContent'>
      <h1 className='sectionHeader'>Owners</h1>
      <div className='row'>
        <div className='column'>
          <h2>Enter Owner Information:</h2>
          <form onSubmit={handleSubmit} className='formInfo'>
            <label>Enter Your Name: </label>
            <input
              type='text'
              name='ownerName'
              value={name}
              onChange={updateOwnerInfo}
              placeholder='Jon Doe'
            />
            <br />
            <label>Enter Your Pet's Name: </label>
            <input
              type='text'
              name='ownerName'
              value={name}
              onChange={updateOwnerInfo}
              placeholder='Scooby-Doo'
            />
            <br />
            <button type='submit'>Submit My Info</button>
          </form>
        </div>
        <div className='column'>
          <h2>Our Owners</h2>
          <hr />
          {owners.map((owner) => (
            <>
              <h3>{owner.name}</h3>
              <p>Is the proud owner of {owner.pet}</p>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Owners;
