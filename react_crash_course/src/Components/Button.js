import React from 'react';
import PropTypes from 'prop-types';

// An example of a reusable component by passing in different props
function Button({ color, text, btnClick }) {
  return (
    <button
      onClick={btnClick}
      className='btn'
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: 'blue',
  text: 'Button',
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  btnClick: PropTypes.func.isRequired,
};

export default Button;
