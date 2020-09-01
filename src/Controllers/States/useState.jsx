import React from 'react';


export default class UseState extends React.Component{
    state = {count : 0, msg: ''};
    buttonClick = () => { // This must be an arrow function else it would give error
        this.setState({count : this.state.count + 1});
    }

    textEnter = (text) => {
        this.setState({msg: text});
    }
    render() {
        return (
            <>
            <div className="row">
                <div className="col-md-4">
                    <input type="text" onChange={e => this.textEnter(e.target.value)}></input>
                </div>
                <div className="col-md-8">
                    {this.state.msg}
                </div>
            </div><br></br>
            
            <div className="row">
                <div className="col-md-4">
                    <button onClick={this.buttonClick}>ClickMe</button>
                </div>
                <div className="col-md-8">
                    <h2>You have clicked {this.state.count} times!</h2>
                </div>
            </div>
            </>
        );
    }
}