import React, { useState } from 'react';
import Display from './Display';
import ButtonPanels from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
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
    <React.Fragment key="key">
      <Display
        result={String(state.total)}
        next={String(state.next)}
        operation={(state.operation)}
      />
      <ButtonPanels clickHandler={handleClick} />
    </React.Fragment>
  );
};

export default App;
