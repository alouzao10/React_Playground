import React, { useContext, useState } from 'react';

import { GlobalContext } from '../../Context/GlobalState';

function Owners() {
  const { owners, pets, addOwner, removeOwner } = useContext(GlobalContext);

  const [name, setOwnerName] = useState('');
  const [pet, setOwnerPet] = useState('');

  const updateOwnerInfo = (e) => {
    let field = e.target.name;
    let value = e.target.value;
    console.log(field, value);
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
    if (name === '' || name === undefined || name === null) {
      alert('Please Enter Your Name');
    } else if (pet === '' || pet === undefined || pet === null) {
      alert('Please Select Your Pet(s)');
    }
    let ownerInfo = { id: Math.random() * 100 + 1, name, pet };
    addOwner(ownerInfo);
    setOwnerName('');
    setOwnerPet(pets[0].name);
  };

  const handleRemove = (ownerID) => {
    //console.log('remove owner', ownerID);
    removeOwner(ownerID);
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
            <label>Select Your Pet(s): </label>
            <select
              value={pet}
              name='ownerPet'
              onChange={updateOwnerInfo}
              placeholder='Which is your pet?'
            >
              <option disabled defaultValue>
                Which is your pet?
              </option>
              {pets.map((pet) => (
                <option value={pet.name} key={pet.id}>
                  {pet.name}
                </option>
              ))}
            </select>
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
              <button onClick={() => handleRemove(owner.id)}>
                Remove Owner
              </button>
              <p>Is the proud owner of:</p>
              <li>{owner.pet}</li>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Owners;
