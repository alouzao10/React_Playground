import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../Context/GlobalState';

function Header() {
  const { pets, owners } = useContext(GlobalContext);

  return (
    <header>
      <h1>Welcome To Pet People</h1>
      <h4>The Perfect Pet People Store</h4>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/pets'>Pets</Link>
        <Link to='/owners'>Owners</Link>
      </div>
    </header>
  );
}

export default Header;
