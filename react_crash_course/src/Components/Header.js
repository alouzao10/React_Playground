import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function Header({ title }) {
  // Unique function to be used in the Button component
  const btnClick = () => {
    console.log('Btn Click');
  };

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add Task' btnClick={btnClick} />
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
