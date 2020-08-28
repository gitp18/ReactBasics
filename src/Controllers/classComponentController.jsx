import React, { Component } from 'react';




export default class ClassComponentController extends Component {
    name = {firstName: 'Ben', lastName: 'Hector'};
    salary = 120000;
    workExp = {'Afixi': 1.8, 'Navsoft': 1.8, 'Inflexi': 1.0, 'Riaxe': 1.11, 'Oditek': 3.1};
    roles = ['Developer', 'Team Leader', 'Requirement Analyser'];
    render() {
        return(
            <React.Fragment>
                <h1> From inside Class Component </h1>
                <div>
                    Personal Detail:
                    <div>{this.name.firstName + ' ' + this.name.lastName} is getting {this.salary}</div>
                    <ul>
                        {this.roles.map((val) => <li key={val}>{val}</li>)}
                    </ul>
                </div>
                <div>
                    Job Detail:
                    <ul>
                        {Object.keys(this.workExp).map(
                            (key, val)=> <li key={key}>{key}: {this.workExp[`${key}`]}</li>
                        )}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}