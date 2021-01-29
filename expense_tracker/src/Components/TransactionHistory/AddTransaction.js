import React, { useState } from 'react';

function AddTransaction() {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState(0);

  const updateItem = (e) => {
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
  };

  return (
    <div>
      <h3>
        <i>Add New Transaction</i>
      </h3>
      <form onSubmit={sendTransaction}>
        <div className='form-control'>
          <label for='text'>Item</label>
          <input
            type='text'
            name='item'
            value={item}
            onChange={updateItem}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label for='amount'>
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
