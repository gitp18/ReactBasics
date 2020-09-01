import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
PropsFunctionComp.defaultProps = {defaultPropsName : 'Ram', commonProps: 'Sita'};
function PropsFunctionComp(props) {
  const defaultPropsName = 'Ram inside selfComponent';
  const parentPropsName = 'Shyam inside selfComponent';
  console.log(props);
  return (
    <React.Fragment>
      <p><label>props passed from Parent : {props.parentPropsName} -- {parentPropsName}</label></p>
      <p><label>props set by defaultProps : {props.defaultPropsName} -- {defaultPropsName}</label></p>
      <p><label>props name same in both set as above : {props.commonProps}</label></p>
      <p><label>props not decared but used: {props.err}</label></p>

      <div className="row">
        <div className="cold-md-6"><label>Rule 1.</label></div>
        <div className="col-md-6">
        <label className="text-success">
          There are 2 way to set value os props<br></br>
          1. From parent component<br></br>
          2. set through defaultProps of same component i.e. same child componenet
        </label>
        </div>
      </div>
      
      <div className="row">
        <div className="cold-md-6"><label>Rule 2.</label></div>
        <div className="col-md-6">
        <label className="text-success">
          1st it looks for the "props" sent from parent componenet.<br></br>
          If it doesn't find from parent component, it looks for default set value.<br></br>
          If it doesn't find the props's value, it simply ignores. But no error.
        </label>
        </div>
      </div>

    </React.Fragment>
  );
}


class PropsClassCompo extends Component{
  render(){
    return(

    );
  }
}
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <PropsFunctionComp parentPropsName="Shyam" commonProps="Radha" /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
