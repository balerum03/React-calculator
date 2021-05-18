import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, onClick }) => {
  let buttonStyle = null;
  if (value === '0') {
    buttonStyle = {
      fontWeight: 'bold',
      fontSize: '20px',
      backgroundColor: 'light-grey',
      width: '50%',
      height: '100px',
    };
  } else if (value === '+' || value === '-' || value === '+/-' || value === '%' || value === '÷' || value === 'AC' || value === '=' || value === 'X') {
    buttonStyle = {
      fontWeight: 'bold',
      fontSize: '20px',
      backgroundColor: 'gray',
      width: '25%',
      height: '100px',
    };
  } else {
    buttonStyle = {
      fontWeight: 'bold',
      fontSize: '20px',
      backgroundColor: 'orange',
      width: '25%',
      height: '100px',
    };
  }

  return (
    <button type="button" style={buttonStyle} onClick={() => { onClick(value); }} name={value}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
