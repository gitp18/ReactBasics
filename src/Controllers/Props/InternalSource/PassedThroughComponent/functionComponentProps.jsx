import React from 'react';


FunctionComponentPropsController.defaultProps = {age: 50};
export default function FunctionComponentPropsController(props){  
    console.log(props);
    return(
        <React.Fragment>
            <h3 className="text-center text-light bg-dark"> Function Component: </h3>
            <div className="row">
                <h5 className="text-success">1. Render simple Number, String, Array, Object, another component</h5>
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
                            <td>
                                {props.name.firstName + ' ' + props.name.lastName} is of age {props.age}, getting {props.salary}
                            </td>
                            <td>
                                <ul>
                                    {props.roles.map((val) => <li key={val}>{val}</li>)}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {Object.keys(props.workExp).map(
                                        (key)=> <li key={key}>{key}: {props.workExp[`${key}`]}</li>
                                    )}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="row">
                <h5 className="text-success">1. Render returnFrom another method: number, string, array, object, another component</h5>
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
                            <td>{props.totaItemsPurchased()}</td>
                            <td>
                                <ul>
                                    {Object.keys(props.shippingAddress()).map(
                                        (key)=> <li key={key}>{key}: {props.shippingAddress()[`${key}`]}</li>
                                    )}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {props.billingAddress().map((val) => <li key={val}>{val}</li>)}
                                </ul>
                            </td>
                            <td>{props.itemsPurchasedList()}</td>
                        </tr>
                    </tbody>
                </table>              
            </div>


            {/* <div className="row">
                <h5 className="text-success">3. Dynamically create Another Component as a child element</h5>
                <table>
                    <thead>
                        <tr>
                            <th>ObjectIteration through a methodReturn</th>
                            <th>ArrayIteration through a methodReturn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.ObjectListOfNThings(5)}</td>
                            <td>{props.ArrayListOfNThings(5)}</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
        </React.Fragment>
    );
}

