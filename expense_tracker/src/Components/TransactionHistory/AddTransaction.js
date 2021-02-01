import React, { useContext, useState } from 'react';

import { GlobalContext } from '../../Context/GlobalState';

function AddTransaction() {
  const { addItem } = useContext(GlobalContext);

  const [item, setItem] = useState('');
  const [amount, setAmount] = useState(0);
  const [id, setID] = useState(5);

  const updateItem = (e) => {
    console.log(e.target.name, e.target.value);
    switch (e.target.name) {
      case 'item':
        setItem(e.target.value);
        break;
      case 'amount':
        setAmount(e.target.value);
        break;
      default:
        break;
    }
  };

  const sendTransaction = (e) => {
    e.preventDefault();
    const newItem = {
      id,
      text: item,
      amount: parseInt(amount),
    };
    let newID = id + 1;
    setID(newID);

    addItem(newItem);
    setAmount(0);
    setItem('');
  };

  return (
    <div>
      <h3>
        <i>Add New Transaction</i>
      </h3>
      <form onSubmit={sendTransaction}>
        <div className='form-control'>
          <label>Item</label>
          <input
            type='text'
            name='item'
            value={item}
            onChange={updateItem}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            name='amount'
            value={amount}
            onChange={updateItem}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn' type='submit'>
          Add transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
