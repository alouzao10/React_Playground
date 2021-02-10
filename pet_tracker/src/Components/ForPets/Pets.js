import React, { useContext, useState } from 'react';

import { GlobalContext } from '../../Context/GlobalState';

function Pets() {
  const { pets } = useContext(GlobalContext);

  const [owner, setOwner] = useState('');
  const [type, setType] = useState('');

  const updatePetItem = (e) => {
    let field = e.target.name;
    let value = e.target.value;
    //console.log(field, value);
    switch (field) {
      case 'owner':
        setOwner(value);
        break;
      case 'type':
        setType(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Pet', type);
    console.log('Owner', owner);
  };

  return (
    <div className='sectionContent'>
      <h1 className='sectionHeader'>Pets</h1>
      <div className='row'>
        <div className='column'>
          <h2>Enter Pet Information:</h2>
          <form onSubmit={handleSubmit}>
            <label>Owner's Name: </label>
            <input
              type='text'
              value={owner}
              name='owner'
              onChange={updatePetItem}
              placeholder='Owner'
            />
            <br />
            <label>Pet Type: </label>
            <select
              value={type}
              name='type'
              onChange={updatePetItem}
              placeholder='Select a Pet'
            >
              <option disabled defaultValue>
                Select a Pet
              </option>
              <option value='dog' key={1}>
                Dog
              </option>
              <option value='cat' key={2}>
                Cat
              </option>
              <option value='fish' key={3}>
                Fish
              </option>
              <option value='other' key={4}>
                Other
              </option>
            </select>
            <br />
            <button type='submit'>Submit My Pet</button>
          </form>
        </div>
        <div className='column'>
          <h2>Our Pets</h2>
          {pets.map((pet) => (
            <div key={pet.id}>
              <h3>{pet.name}</h3>
              <p>
                Is a {pet.type} of {pet.breed}
              </p>
              <p>Is {pet.age} years old</p>
              <p>Is currently owned by {pet.owner}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pets;
