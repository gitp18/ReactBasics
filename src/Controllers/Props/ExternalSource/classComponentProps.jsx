import React, { Component } from 'react';



export default class ClassComponentExternalPropsController extends Component {

    render() {
        return(
            <React.Fragment>
                <h1> Class Component: props passed through Component </h1>
                {/* <div>
                    Personal Detail:[Render simple Number, String, Array, Object, another component]<br />
                    {this.name.firstName + ' ' + this.name.lastName} is getting {this.salary}
                    <div>
                        Role List: ArrayIteration
                        <ul>
                            {this.roles.map((val) => <li key={val}>{val}</li>)}
                        </ul>
                    </div>
                    <div>
                        Job Detail: ObjectIteration
                        <ul>
                            {Object.keys(this.workExp).map(
                                (key, val)=> <li key={key}>{key}: {this.workExp[`${key}`]}</li>
                            )}
                        </ul>
                    </div>
                </div> */}
                
            </React.Fragment>
        );
    }
}
