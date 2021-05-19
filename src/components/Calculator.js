import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanels from './ButtonPanel';

const Calculator = () => {
  const [state, setState] = useState({
    total: '',
    next: '',
    operation: '',
  });
  const handleClick = (buttonName) => {
    const result = calculate(state, buttonName);
    setState(result);
  };

  return (
    <div className="calculator">
      <Display
        result={String(state.total)}
        next={String(state.next)}
        operation={(state.operation)}
      />
      <ButtonPanels clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
