import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({
  row1, row2, row3, row4, row5, clickHandler,
}) => (
  <div className="button-panel">
    <div className="button-row">
      {row1.map((item) => (
        <Button value={item} key={item} onClick={clickHandler} />
      ))}
    </div>
    <div className="button-row">
      {row2.map((item) => (
        <Button value={item} key={item} onClick={clickHandler} />
      ))}
    </div>
    <div className="button-row">
      {row3.map((item) => (
        <Button value={item} key={item} onClick={clickHandler} />
      ))}
    </div>
    <div className="button-row">
      {row4.map((item) => (
        <Button value={item} key={item} onClick={clickHandler} />
      ))}
    </div>
    <div className="button-row">
      {row5.map((item) => (
        <Button value={item} key={item} onClick={clickHandler} />
      ))}
    </div>
  </div>
);

ButtonPanel.propTypes = {
  row1: PropTypes.arrayOf(PropTypes.string),
  row2: PropTypes.arrayOf(PropTypes.string),
  row3: PropTypes.arrayOf(PropTypes.string),
  row4: PropTypes.arrayOf(PropTypes.string),
  row5: PropTypes.arrayOf(PropTypes.string),
  clickHandler: PropTypes.func.isRequired,
};

ButtonPanel.defaultProps = {
  row1: ['AC', '+/-', '%', '÷'],
  row2: ['7', '8', '9', 'X'],
  row3: ['4', '5', '6', '-'],
  row4: ['1', '2', '3', '+'],
  row5: ['0', '.', '='],
};

export default ButtonPanel;
