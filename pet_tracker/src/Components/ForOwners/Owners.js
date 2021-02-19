import React, { useContext, useState } from 'react';

import { GlobalContext } from '../../Context/GlobalState';

function Owners() {
  const { owners, pets, addOwner, removeOwner } = useContext(GlobalContext);

  const [name, setOwnerName] = useState('');
  const [pet, setOwnerPet] = useState({
    name: pets.length !== 0 ? pets[0].name : 'N/A',
    id: pets.length !== 0 ? pets[0].id : 0,
  });

  const updateOwnerInfo = (e) => {
    let field = e.target.name;
    let value = e.target.value;
    console.log(field, value);
    switch (field) {
      case 'ownerName':
        setOwnerName(value);
        break;
      case 'ownerPet':
        setOwnerPet({
          name: pets.filter((pet) => pet.id == value)[0].name,
          id: parseInt(value),
        });
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
    let ownerInfo = {
      id: Math.floor(Math.random() * 10000 + 1),
      name,
      pet: pet.name,
    };
    //console.log(ownerInfo, pet.id);
    addOwner(ownerInfo, pet.id);
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
            <label>Pet to adopt: </label>
            <select
              name='ownerPet'
              onChange={updateOwnerInfo}
              placeholder='Which pet to adopt?'
            >
              <option disabled defaultValue>
                Select a pet to adopt
              </option>
              {pets.map((pet) => (
                <option value={pet.id} key={pet.id}>
                  {pet.name} a {pet.breed} {pet.type}
                </option>
              ))}
            </select>
            <br />
            <br />
            <button className='submitBtn' type='submit'>
              Submit My Info
            </button>
          </form>
        </div>
        <div className='column'>
          <h2>Our Owners:</h2>
          <div className='owners'>
            {owners.length === 0 ? <h1>No Owners</h1> : ''}
            {owners.map((owner) => (
              <div key={owner.id}>
                <h3>
                  {owner.name}
                  <span>
                    <button
                      className='removeBtn'
                      onClick={() => handleRemove(owner.id)}
                    >
                      Remove Owner
                    </button>
                  </span>
                </h3>

                <p>Is the proud owner of:</p>
                <li>{owner.pet}</li>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owners;
