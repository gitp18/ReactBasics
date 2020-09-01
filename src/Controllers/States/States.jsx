import React from 'react';
import ClassComponent from './classComponent';




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

export default function State() {
    return <ClassComponent 
        name={name} salary={salary} roles={roles} workExp={workExp} 
        totaItemsPurchased={totaItemsPurchased} 
        billingAddress={billingAddress} shippingAddress={shippingAddress} 
        itemsPurchasedList={itemsPurchasedList}
    />
}
function Item() {
    return <ul><li key={1}>Mobile</li><li key={2}>Ipod</li></ul>;
}