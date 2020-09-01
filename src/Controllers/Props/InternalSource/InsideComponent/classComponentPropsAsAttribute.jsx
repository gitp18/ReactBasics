import React, { Component } from 'react';



export default class ClassComponentPropsAsAttribute extends Component {
    /*  Simple Number, String, Array, Object  */
    name = {firstName: 'Ben', lastName: 'Hector'};
    salary = 120000;
    roles = ['Developer', 'Team Leader', 'Requirement Analyser'];
    workExp = {'Afixi': 1.8, 'Navsoft': 1.8, 'Inflexi': 1.0, 'Riaxe': 1.11, 'Oditek': 3.1};
 


    /* From method return , also return type is a component */
    totaItemsPurchased = () => 6;
    billingAddress = () => {return ['Karnataka', 'Banglore', 'Benerghatta']};
    shippingAddress = () => {
        return {'State': 'Maharastra', 'City': 'Pune', 'Location': 'Hinjwadi'};
    }
    itemsPurchasedList = () => {
        return <Item />;
    }


    /* Calls the children callback numTimes to produce a repeated component  */
    ArrayListOfNThings(n) {
        return (
            <RepeatArray numTimes={n}>
                {(index) => <div key={index}>This is item {index} in the list</div>}
            </RepeatArray>
        );
    }
    ObjectListOfNThings(n) {
        return (
            <RepeatObject numTimes={n}>
                {(k,v) => <div key={k}>This is item {k} with {v}</div>}
            </RepeatObject>
        );
    }
    



    render() {
        return(
            <React.Fragment>
                <h3 className="text-light bg-dark text-center">Class Component : </h3>
                <div className="row">
                    <h5 className="text-success">
                        1. JSX child element value as Boolean, Null, undefined, Blank values are not rendered. They are just ignored!
                    </h5>
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
                </div>


                <div className="row">
                    <h4 className="text-success">2. Render returnFrom another method: number, string, array, object, another component</h4>
                    <table>
                        <thead>
                        <tr>
                            <th>Total Items Purchased</th>
                            <th>Billing Address</th>
                            <th>Shipping Address</th>
                            <th>Items Purchased List</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{this.totaItemsPurchased()}</td>
                            <td>
                                <ul>
                                    {Object.keys(this.shippingAddress()).map(
                                        (key)=> <li key={key}>{key}: {this.shippingAddress()[`${key}`]}</li>
                                    )}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {this.billingAddress().map((val) => <li key={val}>{val}</li>)}
                                </ul>
                            </td>
                            <td>{this.itemsPurchasedList()}</td>
                        </tr>
                        </tbody>
                    </table>                   
                </div>


                <div className="row">
                    <h4 className="text-success">3. Dynamically create Another Component as a child element</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>ObjectIteration through a methodReturn</th>
                                <th>ArrayIteration through a methodReturn</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.ObjectListOfNThings(5)}</td>
                                <td>{this.ArrayListOfNThings(5)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}


function Item() {
    return <ul><li key={1}>Mobile</li><li key={2}>Ipod</li></ul>;
}


function RepeatArray(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}
function RepeatObject(props) {
    let items = {'a': 1, 'b': 2};
    /* for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    console.log(typeof items, items); */

    return <ul>{Object.keys(items).map((key)=> <li key={key}>{key}: {items[`${key}`]}</li>)}</ul>;
}