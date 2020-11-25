import React, {Component} from 'react';

class Welcome extends Component {
    render (){
        return <h1>Hello {this.props.name} and my hobby is {this.props.hobby}</h1>
    }
}

export default Welcome;