import React, { useContext } from 'react';

import Transaction from './Transaction';

import { GlobalContext } from '../../Context/GlobalState';

function Transactions() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul id='list' className='list'>
        {transactions.map((task) => (
          <Transaction key={task.id} item={task} />
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
