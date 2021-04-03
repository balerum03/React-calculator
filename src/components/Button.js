import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, key }) => (
  <button type="button" className="btn" key={key}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default Button;
