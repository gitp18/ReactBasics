import React from 'react';



export default class ClassComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = props; //console.log(this.state);
        /* 
            Note: Warning: ClassComponent: It is not recommended to assign props directly to state.
            Because updates to props won't be reflected in state. 
            In most cases, it is better to use props directly.
        */
        /*
            Note: Warning: Functions are not valid as a React child.
            This may happen if you return a Component instead of <Component /> from render. 
            Or maybe you meant to call this function rather than return it.
        */
    }

    //state = {dept : 'Harish'};
    
    render() {
        
        return(
            <>
                <h5 className="text-success">Render simple Number, String, Array, Object, another component</h5>
                <div className="row">
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
                                    {this.state.name.firstName + ' ' + this.state.name.lastName} is getting {this.state.salary}
                                </td>
                                <td>
                                    <ul>
                                        {this.state.roles.map((val) => <li key={val}>{val}</li>)}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {Object.keys(this.state.workExp).map(
                                            (key)=> <li key={key}>{key}: {this.state.workExp[`${key}`]}</li>
                                        )}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="row">
                    <h5 className="text-success">
                        2. Render returnFrom another method: number, string, array, object, another component
                    </h5>
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
                            <td>{this.state.totaItemsPurchased()}</td>
                            <td>
                                <ul>
                                    {Object.keys(this.state.shippingAddress()).map(
                                        (key)=> <li key={key}>{key}: {this.state.shippingAddress()[`${key}`]}</li>
                                    )}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {this.state.billingAddress().map((val) => <li key={val}>{val}</li>)}
                                </ul>
                            </td>
                            <td>{this.state.itemsPurchasedList()}</td>
                        </tr>
                        </tbody>
                    </table>                   
                </div>    
            </>
        );
    }
}


function Item() {
    return <ul><li key={1}>Mobile</li><li key={2}>Ipod</li></ul>;
}