import React from 'react';

function Transactions() {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul id='list' className='list'>
        <li className='minus'>
          Cash <span>-$400</span>
          <button class='delete-btn'>X</button>
        </li>
      </ul>
    </div>
  );
}

export default Transactions;
