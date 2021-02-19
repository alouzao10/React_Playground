import React, { useContext, useState } from 'react';

import { GlobalContext } from '../../Context/GlobalState';

function Pets() {
  const { pets, addPet, removePet } = useContext(GlobalContext);

  const [type, setType] = useState('Dog');
  const [name, setPetName] = useState('');
  const [breed, setPetBreed] = useState('');
  const [age, setPetAge] = useState(1);

  const [petTypes, setPetTypes] = useState([
    { id: 1, type: 'Dog' },
    { id: 2, type: 'Cat' },
    { id: 3, type: 'Fish' },
    { id: 4, type: 'Bird' },
    { id: 5, type: 'Other' },
  ]);

  const updatePetItem = (e) => {
    let field = e.target.name;
    let value = e.target.value;
    switch (field) {
      case 'petName':
        setPetName(value);
        break;
      case 'petBreed':
        setPetBreed(value);
        break;
      case 'petAge':
        setPetAge(value);
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
    if (name === '' || name === undefined || name === null) {
      alert("Please Enter Pet's Name");
    } else if (age === '' || age === undefined || age === null) {
      alert("Please Enter Pet's Age");
    } else if (breed === '' || breed === undefined || breed === null) {
      alert("Please Enter Pet's Breed");
    } else if (type === '' || type === undefined || type === null) {
      alert("Please Select Pet's Type");
    }
    let newPet = {
      id: Math.floor(Math.random() * 10000 + 1),
      name,
      type,
      breed,
      age,
    };
    addPet(newPet);
  };

  return (
    <div className='sectionContent'>
      <h1 className='sectionHeader'>Pets</h1>
      <div className='row'>
        <div className='column'>
          <h2>Enter Pet Information:</h2>
          <form onSubmit={handleSubmit} className='formInfo'>
            <label>Pet Name: </label>
            <input
              type='text'
              value={name}
              name='petName'
              onChange={updatePetItem}
              placeholder='Pet Name'
            />
            <br />
            <label>Pet Breed: </label>
            <input
              type='text'
              value={breed}
              name='petBreed'
              onChange={updatePetItem}
              placeholder='Pet Breed'
            />
            <br />
            <label>Pet Age: </label>
            <input
              type='number'
              value={age}
              name='petAge'
              onChange={updatePetItem}
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
              {petTypes.map((petType) => (
                <option value={petType.type} key={petType.id}>
                  {petType.type}
                </option>
              ))}
            </select>
            <br />
            <br />
            <button className='submitBtn' type='submit'>
              Submit My Pet
            </button>
          </form>
        </div>
        <div className='column'>
          <h2>Our Pets:</h2>
          <div className='pets'>
            {pets.length === 0 ? <h1>Shelter is Empty!</h1> : ''}
            {pets.map((pet) => (
              <div key={pet.id}>
                <h3>{pet.name}</h3>
                <button className='removeBtn' onClick={() => removePet(pet.id)}>
                  Remove Pet
                </button>
                <p>
                  Is a {pet.breed} {pet.type}
                </p>
                <p>Is {pet.age} years old</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pets;
