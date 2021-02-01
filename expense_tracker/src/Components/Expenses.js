import React, { useContext } from 'react';

import { GlobalContext } from '../Context/GlobalState';

function Expenses() {
  const { transactions } = useContext(GlobalContext);

  // Pull in all of the individual amounts
  const amounts = transactions.map((item) => item.amount);

  // Separate into incomes and expenses, and calculate totals
  const incomes = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expenses = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+ ${incomes}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>- ${expenses}</p>
      </div>
    </div>
  );
}

export default Expenses;
