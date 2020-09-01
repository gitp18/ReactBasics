import React from 'react';



    /* Calls the children callback numTimes to produce a repeated component /
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
                {(k,v) => <div id='ips' key={k}>This is item {k} with {v}</div>}
            </RepeatObject>
        );
    }*/
function FunctionComponentPropsAsAttribute(props){
     /*  Simple Number, String, Array, Object  */
    const name = {firstName: 'Ben', lastName: 'Hector'};
    const salary = 120000;
    const roles = ['Developer', 'Team Leader', 'Requirement Analyser'];
    const workExp = {'Afixi': 1.8, 'Navsoft': 1.8, 'Inflexi': 1.0, 'Riaxe': 1.11, 'Oditek': 3.1};
  
    //console.log(props);
 
     /* From method return , also return type is a component */
    const totaItemsPurchased = () => 6;
    const billingAddress = () => {return ['Karnataka', 'Banglore', 'Benerghatta']};
    const shippingAddress = () => {
         return {'State': 'Maharastra', 'City': 'Pune', 'Location': 'Hinjwadi'};
     }
     const itemsPurchasedList = () => {
         return <Item />;
     }


     return(
        <React.Fragment>
            <h3 className="text-light bg-dark text-center"> Function Component: </h3>
            <div className="row">
                <h4 className="text-success">
                    1. Render simple Number, String, Array, Object, another component
                </h4>
                <table>
                    <thead>
                        <tr>
                            <th>Personal Detail: Number, String</th>
                            <th>Role List: ArrayIteration</th>
                            <th>Job Detail: ObjectIteration</th>
                            <th>Another Component</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
     <td>{name.firstName + ' ' + name.lastName} is {props.age}, getting {salary}</td>
                            <td>
                                <ul>
                                    {roles.map((val) => <li key={val}>{val}</li>)}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {Object.keys(workExp).map(
                                        (key)=> <li key={key}>{key}: {workExp[`${key}`]}</li>
                                    )}
                                </ul>
                            </td>
                            <td><Item /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="row">
                <h4 className="text-success">2. Render returnFrom another method: number, string, array, object, another component</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Total Items Purchased: Number, String</th>
                            <th>Billing Address: ArrayIteration</th>
                            <th>Shipping Address: ObjectIteration</th>
                            <th>Items Purchased List</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{totaItemsPurchased()} Items have been purchanged</td>
                            <td>
                                <ul>
                                    {Object.keys(shippingAddress()).map(
                                        (key)=> <li key={key}>{key}: {shippingAddress()[`${key}`]}</li>
                                    )}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {billingAddress().map((val) => <li key={val}>{val}</li>)}
                                </ul>
                            </td>
                            <td>{itemsPurchasedList()}</td>
                        </tr>
                    </tbody>
                </table>                  
            </div>
                
            {/* <div className="row">
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
                            <td>{ObjectListOfNThings(5)}</td>
                            <td>{ArrayListOfNThings(5)}</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
 
        </React.Fragment>
    );
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

FunctionComponentPropsAsAttribute.defaultProps = {age: 50};
export default FunctionComponentPropsAsAttribute;