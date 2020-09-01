import React, { Component } from 'react';



class ClassComponentPropsController extends Component {
    
    render() {
        return(
            <React.Fragment>
                <h3 className="text-center text-light bg-dark">Class Component :</h3>
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
                                    {this.props.name.firstName + ' ' + this.props.name.lastName} is of age {this.props.age}, getting {this.props.salary}
                                </td>
                                <td>
                                    <ul>
                                        {this.props.roles.map((val) => <li key={val}>{val}</li>)}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {Object.keys(this.props.workExp).map(
                                            (key)=> <li key={key}>{key}: {this.props.workExp[`${key}`]}</li>
                                        )}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row">
                    <h5 className="text-success">2. Render returnFrom another method: number, string, array, object, another component</h5>
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
                            <td>{this.props.totaItemsPurchased()}</td>
                            <td>
                                <ul>
                                    {Object.keys(this.props.shippingAddress()).map(
                                        (key)=> <li key={key}>{key}: {this.props.shippingAddress()[`${key}`]}</li>
                                    )}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {this.props.billingAddress().map((val) => <li key={val}>{val}</li>)}
                                </ul>
                            </td>
                            <td>{this.props.itemsPurchasedList()}</td>
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
                                <td>{this.props.ObjectListOfNThings(5)}</td>
                                <td>{this.props.ArrayListOfNThings(5)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}     
            </React.Fragment>
        );
    }
}
ClassComponentPropsController.defaultProps = { age: 50 };
export default ClassComponentPropsController;