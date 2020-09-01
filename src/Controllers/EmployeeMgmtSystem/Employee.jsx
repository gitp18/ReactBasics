import React from 'react';


export default function Employee(props) {
    return (
        <div>
            <h5>Employee Component</h5>
            <p><label>Id : <b>{props.id}</b></label></p>
            <p><label>Name : <b>{props.name}</b></label></p>
            <p><label>Dept : <b>{props.dept}</b></label></p>
            <p><label>Salary : <b>{props.salary}</b></label></p>
            <p><label>Total Projects Done : <b>{props.totProjects}</b></label></p>
            <Salary basic={props.basic} hra="{props.hra}" allowance="{props.allowance}"></Salary>
        </div>
    );
}


function Salary(props) {
    return (
        <div>
            <h5>Salary Component</h5>
            <p><label>Basic : <b>{props.basic}</b></label></p>
            <p><label>HRA : <b>{props.hra}</b></label></p>
            <p><label>SpecialAllowance : <b>{props.specialAllowance}</b></label></p>
        </div>
    );
}