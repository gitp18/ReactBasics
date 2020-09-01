import React from 'react';


export default function FunctionComponentParentToChild(props) {
    return (
        <>
            <h5 className="text-light bg-dark text-center">Parent To Child : </h5><br></br>
            <div className="row">
                <div className="col-md-6">
                <h5>Employee Component</h5>
                <p><label>Id : <b>{props.id}</b></label></p>
                <p><label>Name : <b>{props.name}</b></label></p>
                <p><label>Dept : <b>{props.dept}</b></label></p>
                <p><label>Salary : <b>{props.salary}</b></label></p>
                <p><label>Total Projects Done : <b>{props.totProjects}</b></label></p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Salary basic={props.basic} hra={props.hra} allowance={props.allowance}></Salary>
                </div>           
                
                <div className="col-md-3">
                    <Project totProjects={props.totProjects} />
                </div>
            </div>
        </>
    );
}

function Salary(props) {
    return (
        <>
            <h5>Salary Component</h5>
            <p><label>Emp Id : <b>{props.id}</b></label></p>
            <p><label>Basic : <b>{props.basic}</b></label></p>
            <p><label>HRA : <b>{props.hra}</b></label></p>
            <p><label>Allowance : <b>{props.allowance}</b></label></p>
        </>
    );
}

function Project(props) {
    return (
        <>
            <h5>Project Component</h5>
            <p><label>Emp Id : <b>{props.id}</b></label></p>
            <p><label>Total Projects : <b>{props.totProjects}</b></label></p>
        </>
    );    
}