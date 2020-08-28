import React from 'react';

export default function FunctionComponentController(){
    const name = {firstName: 'Ben', lastName: 'Hector'};
    const salary = 120000;
    const roles = ['Developer', 'Team Leader', 'Requirement Analyser'];
    const workExp = {'Afixi': 1.8, 'Navsoft': 1.8, 'Inflexi': 1.0, 'Riaxe': 1.11, 'Oditek': 3.1};
    return(
        <React.Fragment>
            <div>
                <h1> From inside Function Component</h1>
                Detail: {name.firstName + ' ' + name.lastName} is getting {salary} for the roles he plays 
                <ul>
                    {roles.map((role) => <li key={role}>{role} </li>)}
                </ul>
            </div>
        
            <div>
                Job Detail:
                <ul>
                    {Object.keys(workExp).map(
                        (key, val)=> <li key={key}>{key}: {workExp[`${key}`]}</li>
                    )}
                </ul>
            </div>
        </React.Fragment>
    );
}