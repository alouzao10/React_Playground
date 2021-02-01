import React, { useContext } from 'react';

import { GlobalContext } from '../Context/GlobalState';

function Balance() {
  const { transactions } = useContext(GlobalContext);
  // Return a list of all of the amounts in the Global State
  const amounts = transactions.map((item) => item.amount);
  // Add all of the amounts together in the list and return the total
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const sign = total < 0 ? '-' : '';

  return (
    <div>
      <h4>Current Balance:</h4>
      <h1 id='balance'>
        {sign}${Math.abs(total)}
      </h1>
    </div>
  );
}

export default Balance;
