import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='siteHeader'>
      <h1>Welcome To Pet People</h1>
      <h4>The Perfect Pet People Store</h4>
      <div className='navigation'>
        <Link to='/' className='link'>
          Home
        </Link>
        <Link to='/pets' className='link'>
          Pets
        </Link>
        <Link to='/owners' className='link'>
          Owners
        </Link>
      </div>
    </header>
  );
}

export default Header;
