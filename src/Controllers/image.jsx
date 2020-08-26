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
               <div>
                    <h1>ImageController</h1>
                    <img style={this.state.imgClass} src="https://picsum.photos/200" />
                    <img style={this.state.imgClass} src={this.state.imgUrl} />
                    <img style={this.state.imgClass} src={this.state.localImage1} />
                    <img style={this.state.imgClass} src={this.state.localImage2} />
                    <img style={this.state.imgClass} src={this.state.localImagePath + this.state.localImage3} />
                    <img style={this.state.imgClass} src={`${process.env.PUBLIC_URL}/Assets/a.png`} />
                    <img style={this.state.imgClass} src={`${this.state.imgPath}a.png`} />
                    <img style={this.state.imgClass} src={`${process.env.PUBLIC_URL}` + this.state.localImage2} />
                    {/*<img src={require('../../public/logo512.png')} /> incase webpack gets used */}
                </div>
                <div>
                    <ol>
                        {this.state.localImageList.map(
                            im => <li key={im}><img style={this.state.imgClass} src={this.state.imgPath + im} /></li>
                        )}
                    </ol>
                </div>
            </React.Fragment>
        );
    }
}