import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Button from './Button';

function Header({ title, displayTask }) {
  // Unique function to be used in the Button component
  /*const btnClick = () => {
    console.log('Btn Click');
  };*/

  const location = useLocation();

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' ? (
        <Button color='green' text='Add Task' btnClick={displayTask} />
      ) : (
        ''
      )}
    </header>
  );
}

// Define default props the component takes in
// If no values are provided these will be used
Header.defaultProps = {
  title: 'Task Tracker',
};

// Define the data types for each prop to be specific
// Determine if the props are required or not for the component
Header.prototype = {
  title: PropTypes.string.isRequired,
};

export default Header;
