import React from 'react';
//import logo from './logo.svg';
import './App.css';

import FunctionComponentController from './Controllers/functionComponentController';
import classComponentController from './Controllers/classComponentController';
import ClassComponentController from './Controllers/classComponentController';

function App() {
  return (
    <div className="App">
      <FunctionComponentController />
      <ClassComponentController />
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>*/}
    </div>
  );
}

export default App;
