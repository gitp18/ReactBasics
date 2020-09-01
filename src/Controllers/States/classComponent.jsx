import React, { Component } from 'react';



export default class ClassComponent extends Component {
    /* constructor(props) {
        super(props);
        this.state = props;
        console.log(this.state);
    } 
    constructor(){
        console.log(this.props);
    }*/



    render() {
        //console.log(this.props);
        return(
            <React.Fragment>
                <h1> Use of states</h1>
                {/* <div>
                    Render simple Number, String, Array, Object, another component
                    <table>
                        <thead>
                            <tr>
                                <th>Personal Detail: Number, String</th>
                                <th>Role List: ArrayIteration</th>
                                <th>Job Detail: ObjectIteration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.name.firstName + ' ' + this.name.lastName} is getting {this.salary}</td>
                                <td>
                                    <ul>
                                        {this.roles.map((val) => <li key={val}>{val}</li>)}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {Object.keys(this.workExp).map(
                                            (key)=> <li key={key}>{key}: {this.workExp[`${key}`]}</li>
                                        )}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}


    
            </React.Fragment>
        );
    }
}


function Item() {
    return <ul><li key={1}>Mobile</li><li key={2}>Ipod</li></ul>;
}