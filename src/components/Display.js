import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, next, operation }) => (
  <div className="display">
    {(!result && next) || result}
    { operation }
    {(result && next)}
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  result: '',
  next: '',
  operation: '',
};

export default Display;
