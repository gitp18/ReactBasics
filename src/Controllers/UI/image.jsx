import React, { Component } from 'react';

export default class ImageController extends Component{
    state = {
        imgUrl: 'https://picsum.photos/201',
        localImage1: '/logo512.png',
        localImage2: '/Assets/a.png',
        localImage3: 'ngSwitch.png',
        localImagePath: '/Assets/',
        imgPath: `${process.env.PUBLIC_URL}/Assets/`,
        localImageList: ['validation.png', 'AngularRouting1.png', 'outputProperty.png'],
        imgClass: {width: 100, height: 100}
    };

    render() {
        return (
           <React.Fragment>
               <h1 className="text-center">React Version: {React.version}&nbsp; ImageController</h1><br>
               </br>
               <h3>External Source</h3>
               <div className="row">
                    <div className="col-md-2 col-md-offset-2">
                        <img style={this.state.imgClass} src="https://picsum.photos/200" />
                    </div>
                    <div className="col-md-2">
                        <img style={this.state.imgClass} src={this.state.imgUrl} />    
                    </div>
                </div><br></br>
                <h3>Local Source</h3>
                <div className="row">
                    <div className="col-md-2"><img style={this.state.imgClass} src={this.state.localImage1} /></div>
                    <div className="col-md-2"><img style={this.state.imgClass} src={this.state.localImage2} /></div>
                    <div className="col-md-2"><img style={this.state.imgClass} src={this.state.localImagePath + this.state.localImage3} /></div>
                    <div className="col-md-2"><img style={this.state.imgClass} src={`${process.env.PUBLIC_URL}/Assets/a.png`} /></div>
                    <div className="col-md-2"><img style={this.state.imgClass} src={`${this.state.imgPath}a.png`} /></div>
                    <div className="col-md-2"><img style={this.state.imgClass} src={`${process.env.PUBLIC_URL}` + this.state.localImage2} /></div>
                    
                    {/*<img src={require('../../public/logo512.png')} /> incase webpack gets used */}
                </div><br></br>
                <div className="row">
                        {this.state.localImageList.map(
                            im => <span className="col-md-2" key={im}><img style={this.state.imgClass} src={this.state.imgPath + im} /></span>
                        )}
                </div>
            </React.Fragment>
        );
    }
}