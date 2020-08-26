import React from 'react';
//import logo from './logo.svg';
import './App.css';

import ImageController from './Controllers/image';

function App() {
  return (
    <div className="App">
      <ImageController />  
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
