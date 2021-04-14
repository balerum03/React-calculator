import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, onClick }) => (
  <button type="button" className="btn" onClick={() => { onClick(value); }} name={value}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
