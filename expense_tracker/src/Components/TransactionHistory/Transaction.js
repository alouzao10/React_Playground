import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

function Transaction({ item }) {
  const { removeItem } = useContext(GlobalContext);

  const sign = item.amount < 0 ? '-' : '';

  return (
    <div>
      <li className={item.amount < 0 ? 'minus' : 'plus'}>
        {item.text}
        <span>
          {sign}${Math.abs(item.amount)}
        </span>
        <button className='delete-btn' onClick={() => removeItem(item.id)}>
          X
        </button>
      </li>
    </div>
  );
}

export default Transaction;
