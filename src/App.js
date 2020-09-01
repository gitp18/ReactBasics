import React from 'react';
//import logo from './logo.svg';
import './App.css';



//import UI from './Controllers/UI/UI';
import InternalProps from './Controllers/Props/InternalSource/InsideComponent/InternalProps';
import PassedThroughComponent from './Controllers/Props/InternalSource/PassedThroughComponent/PassedThroughComponent';
//import State from './Controllers/States/States';

//import External from './Controllers/PropsInElement/External/External';

import ComponentCommunication from './Controllers/ComponentCommunication/ComponentCommunication';
function App() {
  return (
    <div className="App" className="container-fluid">
      {/* <UI /> */}
       <InternalProps />
      <PassedThroughComponent />
      {/* <State /> */}
      {/* <External /> */}

      {/* <ComponentCommunication /> */}
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
