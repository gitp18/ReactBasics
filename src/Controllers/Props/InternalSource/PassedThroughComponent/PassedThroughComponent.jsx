import React from 'react';
import ClassComponentPropsController from './classComponentProps';
import FunctionComponentPropsController from './functionComponentProps';



/*  Simple Number, String, Array, Object  */
const name = {firstName: 'Ben', lastName: 'Hector'};
const salary = 120000;
const roles = ['Developer', 'Team Leader', 'Requirement Analyser'];
const workExp = {'Afixi': 1.8, 'Navsoft': 1.8, 'Inflexi': 1.0, 'Riaxe': 1.11, 'Oditek': 3.1};



/* From method return , also return type is a component */
const totaItemsPurchased = () => 6;
const billingAddress = () => {return ['Karnataka', 'Banglore', 'Benerghatta']};
const shippingAddress = () => {
    return {'State': 'Maharastra', 'City': 'Pune', 'Location': 'Hinjwadi'};
}
const itemsPurchasedList = () => {
    return <Item />;
}
function Item() {
    return <ul><li key={1}>Mobile</li><li key={2}>Ipod</li></ul>;
} 

FunctionComponentPropsController.defaultProps = {age: 50};
export default function PassedThroughComponent() {
    return(
        <React.Fragment>
        <h1 className="text-center text-primary">"props" passed through Parent Component As Attribute</h1>
        <div className="row">
            <div className="col-md-6">
                <FunctionComponentPropsController 
                    name={name} salary={salary} roles={roles} workExp={workExp} 
                    totaItemsPurchased={totaItemsPurchased} 
                    billingAddress={billingAddress} shippingAddress={shippingAddress} 
                    itemsPurchasedList={itemsPurchasedList}
                />
            </div>
            <div className="col-md-6">
                <ClassComponentPropsController 
                    name={name} salary={salary} roles={roles} workExp={workExp} 
                    totaItemsPurchased={totaItemsPurchased} 
                    billingAddress={billingAddress} shippingAddress={shippingAddress} 
                    itemsPurchasedList={itemsPurchasedList} 
                ></ClassComponentPropsController>
            </div>
        </div>
        </React.Fragment>
    )
}
