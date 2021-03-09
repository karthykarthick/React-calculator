import React from 'react';
import Display from './display';
import ButtonPannel from './button_panel';
import Calculate from '../logic/calculate';

Calculate();

function App() {
  return (
    <div className="App">
      <>
        <Display result="0" />
        <ButtonPannel />
      </>
    </div>
  );
}

export default App;
