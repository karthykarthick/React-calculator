import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';

const App = () => {
  // eslint-disable-next-line no-console
  console.log(Calculate);
  return (

    <div className="App">
      <h1>React Calculator</h1>
      <Display />
      <ButtonPanel />

    </div>
  );
};

export default App;
