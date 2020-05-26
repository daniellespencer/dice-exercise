import React from 'react';
import Die from './components/Die'

import './App.css';

function App() {
  return (
    <div className="App">
      <Die face="five"/>
      <Die face="two"/>
    </div>
  );
}

export default App;
