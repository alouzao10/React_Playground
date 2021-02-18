export default (state, payload) => {
  switch (payload.action) {
    case 'ADD_PET':
      let newPet = payload.data;
      // Add the new pet and return new Pets
      fetch('http://localhost:5000/pets/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newPet),
      })
        .then((res) => res.json())
        .then((data) => {
          return [...state.pets, data];
        });
      break;
    case 'REMOVE_PET':
      // Remove the pet
      fetch(`http://localhost:5000/pets/${payload.data}`, {
        method: 'DELETE',
      });
      // Return new Pets
      fetch('http://localhost:5000/pets')
        .then((res) => res.json())
        .then((data) => {
          return [...state.pets, data];
        });
      break;

    case 'ADD_OWNER':
      let newOwner = payload.data.newOwner;
      console.log(newOwner);
      // Add the new owners information
      fetch('http://localhost:5000/owners', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newOwner),
      })
        .then((res) => res.json())
        .then((data) => {
          return [...state.owners, data];
        });
      // Remove the adopted pet
      fetch(`http://localhost:5000/pets/${payload.data.petID}`, {
        method: 'DELETE',
      });
      // Return new Pets list
      fetch('http://localhost:5000/pets')
        .then((res) => res.json())
        .then((data) => {
          return [...state.pets, data];
        });
      break;

    case 'REMOVE_OWNER':
      // Remove the Owner by their ID
      fetch(`http://localhost:5000/owners/${payload.data}`, {
        method: 'DELETE',
      });
      // Get the new list of Owners
      fetch('http://localhost:5000/owners')
        .then((res) => res.json())
        .then((data) => {
          return [...state.owners, data];
        });
      break;

    default:
      break;
  }
};
