import React from 'react';
import Display from './Display';
import ButtonPanels from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => (
  <React.Fragment key="key">
    <Display />
    <ButtonPanels calculate={calculate} />
  </React.Fragment>
);

export default App;
