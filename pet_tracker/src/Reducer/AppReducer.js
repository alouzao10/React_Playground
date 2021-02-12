export default (state, payload) => {
  switch (payload.action) {
    case 'ADD_PET':
      let newPet = payload.data;
      fetch('http://localhost:5000/pets/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newPet),
      })
        .then((res) => res.json())
        .then((data) => {
          return [...state.pets, data];
        });
    case 'REMOVE_PET':
      break;
    case 'ADD_OWNER':
      let newOwner = payload.data;
      fetch('http://localhost:5000/owners/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newOwner),
      })
        .then((res) => res.json())
        .then((data) => {
          return [...state.owners, data];
        });
    case 'REMOVE_OWNER':
      break;
    default:
      break;
  }
};
